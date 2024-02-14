from django.shortcuts import render
from rest_framework import viewsets
from django.utils.decorators import method_decorator
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import (
    CategorySerializer, 
    CustomerMenuItemSerializer, 
    SuperuserMenuItemSerializer,
    MenuItemUpdateSerializer, 
    CategoryUpdateSerializer,
    FrontPageMenuItemSerializer,
)
from Vendor.models import vendor
from Restaurant.models import Category, MenuItem, Restaurant
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from rest_framework.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import AuthenticationFailed
import jwt,datetime
    

class CategoryViewSet(viewsets.ModelViewSet):

    @action(detail=False, methods=['GET'])
    def view_category(self,request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User is not authenticated')
        
        try:
            payload = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        Vrestaurant = Vendor.restaurant
        categories = Category.objects.filter(restaurant = Vrestaurant)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)


    @action(detail=False, methods=['POST'])
    def create_category(self, request):
    
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User is not authenticated')

        try:
            payload = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        Vrestaurant = Vendor.restaurant

        serializer =  CategorySerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(restaurant=Vrestaurant , owner=Vendor)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            raise PermissionDenied("Permission denied: You are not the owner of this object.")
        

    def update_category(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
        except MenuItem.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)
        
        if request.method == 'PUT':
            serializer = CategoryUpdateSerializer(category, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


    def delete_category(self, request, category_id):
        try:
            Dcategory = get_object_or_404(Category, id=category_id)
            Dcategory.delete()
            return Response({'message': 'Menu item deleted successfully'})
        except MenuItem.DoesNotExist:
            return Response({'error': 'Menu item not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': f'Error deleting menu item: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class MenuItemViewSet(viewsets.ModelViewSet):
    
    @api_view(['GET'])
    def get_menu_items(request, restaurant_name):
        try:
            restaurant = Restaurant.objects.get(name=restaurant_name)
        except Restaurant.DoesNotExist:
            return Response({'error': 'Restaurant not found'}, status=404)

        categories = Category.objects.filter(restaurant=restaurant)
        items = MenuItem.objects.filter(category__in=categories)

        serializer = CustomerMenuItemSerializer(items, many=True)
        return Response({'menu_items': serializer.data})
    
    
    @action(detail=False, methods=['GET'])
    def by_category(self, request, category_id):
        try:
            print(category_id)
            category= Category.objects.get(id=category_id)
        except:
            return Response({'error':'Restaurant not found'}, status=404)
        items = MenuItem.objects.filter(category=category)

        serializer = FrontPageMenuItemSerializer(items, many=True)
        return Response(serializer.data)
    

    @action(detail=True, methods=['GET'])
    def item_detail(self, request, menu_item_id):
        try:
            menu_item = MenuItem.objects.get(id=menu_item_id)
            serializer_class = CustomerMenuItemSerializer
            serializer = serializer_class(menu_item)

            return Response(serializer.data)
        except MenuItem.DoesNotExist:
            return Response({"error": "Menu item does not exist"}, status=404)
        

    @action(detail=True, methods=['GET'])
    def admin_item_detail(self, request, menu_item_id):
        try:
            menu_item = MenuItem.objects.get(id=menu_item_id)
            serializer_class = SuperuserMenuItemSerializer
            serializer = serializer_class(menu_item)

            return Response(serializer.data)
        except MenuItem.DoesNotExist:
            return Response({"error": "Menu item does not exist"}, status=404)
        
    
    @action(detail=False, methods=['POST'])   
    def create_menuitem(self, request, category_id):
    
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User is not authenticated')
        
        try:
            payload = jwt.decode(token, 'your_secret_key', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        Mrestaurant = Vendor.restaurant
        Mcategory = request.data.get('category_id')
        category = get_object_or_404(Category, id=Mcategory, restaurant= Mrestaurant)
        serializer = SuperuserMenuItemSerializer(data=request.data)

        if Vendor.restaurant == Mrestaurant:

            serializer.save(category=category, owner=Vendor, restaurant = Mrestaurant)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            raise PermissionDenied("Permission denied: You are not the owner of this object.")


    @action(detail=True, methods=['PUT','PATCH'])
    def update_menuitem(self, request, menu_item_id):
        try:
            menu_item = MenuItem.objects.get(pk=menu_item_id)
        except MenuItem.DoesNotExist:
            return Response({'error': 'Menu item not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = MenuItemUpdateSerializer(menu_item, data=request.data, partial=True)
        if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

    @action(detail=True, methods=['DELETE'])
    def delete_menuitem(self, request, menu_item_id):
        try:
            menu_item = get_object_or_404(MenuItem, pk=menu_item_id)
            menu_item.delete()
            return Response({'message': 'Menu item deleted successfully'})
        except MenuItem.DoesNotExist:
            return Response({'error': 'Menu item not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': f'Error deleting menu item: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
 
