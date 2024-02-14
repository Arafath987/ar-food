from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import OrderSerializer , OrderWithItemsSerializer
from Restaurant.serializers import CustomerMenuItemSerializer
from Vendor.models import vendor
from Restaurant.models import Category, MenuItem, Restaurant
from Orders.models import Order,OrderItem
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from rest_framework.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
import jwt,datetime

class PlaceOrderViewSet(viewsets.ModelViewSet):
    
    @action(detail=True, methods=['POST'])
    def place_order(self, request):
        table_number = request.data.get('table_number')
        item_quantities = request.data.get('item_quantities', [])

        # Fetch the restaurant based on the first item (assuming all items are from the same restaurant)
        first_item_data = item_quantities[0] if item_quantities else None

        if not first_item_data or 'item_id' not in first_item_data:
            return Response({'error': 'Invalid item data'}, status=status.HTTP_400_BAD_REQUEST)

        menu_item = get_object_or_404(MenuItem, id=first_item_data['item_id'])

        restaurant = menu_item.restaurant

        # Validate and process the order
        order = Order.objects.create(table_number=table_number, total_price=0, restaurant=restaurant)

        for item_data in item_quantities:
            menu_item = get_object_or_404(MenuItem, id=item_data['item_id'])
            quantity = item_data['quantity']
               
            # Create the OrderItem and associate it with the restaurant
            OrderItem.objects.create(
                order=order,
                menu_item=menu_item,
                quantity=quantity,
                total_price_item=menu_item.price * quantity

            )

            order.total_price += menu_item.price * quantity

        order.save()

        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer 

    @action(detail=False, methods=['GET'])
    def ordered_items(self, request):
        token = request.COOKIES.get('jwt') 

        if not token:
            raise AuthenticationFailed('User is not authenticated')
        
        try:
            payload = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        preparing_orders = Order.objects.filter(status='ordered', restaurant=Vendor.restaurant)
        serializer = OrderSerializer(preparing_orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def proceed_to_preparation(self, request, order_id):
        order = get_object_or_404(Order, id=order_id)
        order.status = 'preparing'
        order.save()
        return Response({'message': 'Order is now in preparation.'}, status=status.HTTP_200_OK)

    @action(detail=False, methods=['GET'])
    def preparation_orders(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User is not authenticated')
        
        try:
            payload = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        preparing_orders = Order.objects.filter(status='preparing', restaurant=Vendor.restaurant)
        serializer = OrderSerializer(preparing_orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['POST'])
    def proceed_to_delivery(self, request, order_id):
        order = get_object_or_404(Order, id=order_id)
        order.status = 'delivered'
        order.save()
        return Response({'message': 'Order is now in preparation.'}, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['GET'])
    def orders_delivered(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User is not authenticated')
        
        try:
            payload = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        delivered_orders = Order.objects.filter(status='delivered', restaurant=Vendor.restaurant)
        serializer = OrderSerializer(delivered_orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class OrderItemViewSet(viewsets.ModelViewSet):
    @action(detail=True, methods=['GET'])
    def order_item_details(self, request, order_id):
        order = get_object_or_404(Order, id=order_id)
        serializer = OrderWithItemsSerializer(order)  # Pass Order instance
        return Response(serializer.data, status=status.HTTP_200_OK)

    

class RateMenuItemView(viewsets.ModelViewSet):
    @api_view(['POST'])
    def post(self, request, menu_item_id):
        menu_item = get_object_or_404(MenuItem, pk=menu_item_id)
        rating = request.data.get('rating')
   
        if not rating:
            return Response({'error': 'error.'}, status=status.HTTP_400_BAD_REQUEST)

        # Update the average rating based on the new rating
        menu_item.rating = (menu_item.rating + float(rating)) / 2
        menu_item.save()

        serializer = CustomerMenuItemSerializer(menu_item)
        return Response(serializer.data, status=status.HTTP_200_OK)