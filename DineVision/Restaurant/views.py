from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import (
    CategorySerializer,
    CustomerMenuItemSerializer,
    CreateMenuItemSerializer,
    MenuItemUpdateSerializer,
    CategoryUpdateSerializer,
    FrontPageMenuItemSerializer,
    CustomerCategorySerializer,
)
from Restaurant.models import Category, MenuItem, Restaurant
from rest_framework.decorators import api_view
from rest_framework.exceptions import PermissionDenied
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from .utils import authenticate_user


class CategoryViewSet(viewsets.ModelViewSet):

    @action(detail=False, methods=["GET"])
    def view_category(self, request):
        token = request.COOKIES.get("jwt")

        Vendor = authenticate_user(token)
        Vendor_restaurant = Vendor.restaurant
        categories = Category.objects.filter(restaurant=Vendor_restaurant)
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    @api_view(["GET"])
    def user_viewcategory(request, restaurant_id):
        try:
            restaurant = Restaurant.objects.get(id=restaurant_id)
        except Restaurant.DoesNotExist:
            return Response({"error": "Restaurant not found"}, status=404)

        categories = Category.objects.filter(restaurant=restaurant)
        serializer = CustomerCategorySerializer(categories, many=True)

        return Response(serializer.data)

    @action(detail=False, methods=["POST"])
    def create_category(self, request):

        token = request.COOKIES.get("jwt")

        Vendor = authenticate_user(token)
        Vendor_restaurant = Vendor.restaurant

        serializer = CategorySerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(restaurant=Vendor_restaurant)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            raise PermissionDenied(
                "Permission denied: You are not the owner of this object."
            )

    def update_category(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
        except MenuItem.DoesNotExist:
            return Response(
                {"error": "Category not found"}, status=status.HTTP_404_NOT_FOUND
            )

        if request.method == "PUT":
            serializer = CategoryUpdateSerializer(category, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete_category(self, request, category_id):
        try:
            Dcategory = get_object_or_404(Category, id=category_id)
            Dcategory.delete()
            return Response({"message": "Menu item deleted successfully"})
        except MenuItem.DoesNotExist:
            return Response(
                {"error": "Menu item not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": f"Error deleting menu item: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )



class MenuItemViewSet(viewsets.ModelViewSet):

# Return the list of all menu items 
    @api_view(["GET"])
    def get_menu_items(request, restaurant_id):
        try:
            restaurant = Restaurant.objects.get(id=restaurant_id)
        except Restaurant.DoesNotExist:
            return Response({"error": "Restaurant not found"}, status=404)

        categories = Category.objects.filter(restaurant=restaurant)
        items = MenuItem.objects.filter(category__in=categories,is_available=True)

        serializer = CustomerMenuItemSerializer(items, many=True)
        return Response({"menu_items": serializer.data})

# Return the the list of menu items of specific category 
    @action(detail=False, methods=["GET"])
    def by_category(self, request, category_id):
        try:
            category = Category.objects.get(id=category_id)
        except:
            return Response({"error": "Restaurant not found"}, status=404)
        items = MenuItem.objects.filter(category=category,is_available=True)

        serializer = FrontPageMenuItemSerializer(items, many=True)
        return Response(serializer.data)

# Get the details of a single menu item
    @action(detail=True, methods=["GET"])
    def item_detail(self, request, menu_item_id):
        try:
            menu_item = MenuItem.objects.get(id=menu_item_id)
            serializer_class = CustomerMenuItemSerializer
            serializer = serializer_class(menu_item)

            return Response(serializer.data)
        except MenuItem.DoesNotExist:
            return Response({"error": "Menu item does not exist"}, status=404)
        

# Create a menuitem,the restaurant and Vendor is identified on the basis of cookie 
    @action(detail=False, methods=["POST"])
    def create_menuitem(self, request):

        def fetch_categories(vendor_restaurant):
            categories = Category.objects.filter(restaurant=vendor_restaurant)
            categories_data = [{"id": category.id, "name": category.name} for category in categories]
            total_categories = categories.count()
            return categories_data, total_categories

        def create_menu_item(data, vendor, vendor_restaurant, mcategory, response_data):
            try:
                category = Category.objects.get(id=mcategory, restaurant=vendor_restaurant)
            except Category.DoesNotExist:
                response_data['error'] = "Category not found for the specified restaurant."
                return Response(response_data, status=status.HTTP_404_NOT_FOUND)
            
            serializer = CreateMenuItemSerializer(data=data)
            if serializer.is_valid():
                serializer.save(category=category, restaurant=vendor_restaurant)
                response_data['menu_item'] = serializer.data
                return Response(response_data, status=status.HTTP_201_CREATED)
            else:
                response_data['errors'] = serializer.errors
                return Response(response_data, status=status.HTTP_400_BAD_REQUEST)

        token = request.COOKIES.get("jwt")
        vendor = authenticate_user(token)

        if not vendor:
            return Response("Unauthorized", status=status.HTTP_401_UNAUTHORIZED)

        vendor_restaurant = vendor.restaurant
        mcategory = request.data.get("category")

        response_data = {}

        # Fetch categories
        categories_data, total_categories = fetch_categories(vendor_restaurant)
        response_data.update({
            "categories": categories_data,
            "total_categories": total_categories
        })

        if not mcategory:
            return Response(response_data, status=status.HTTP_200_OK)

        # Create menu item if mcategory is provided
        return create_menu_item(request.data, vendor, vendor_restaurant, mcategory, response_data)



    @action(detail=True, methods=["PUT", "PATCH"])
    def update_menuitem(self, request, menu_item_id):
        try:
            menu_item = MenuItem.objects.get(pk=menu_item_id)
        except MenuItem.DoesNotExist:
            return Response(
                {"error": "Menu item not found"}, status=status.HTTP_404_NOT_FOUND
            )

        serializer = MenuItemUpdateSerializer(
            menu_item, data=request.data, partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    @action(detail=True, methods=["DELETE"])
    def delete_menuitem(self, request, menu_item_id):
        try:
            menu_item = get_object_or_404(MenuItem, pk=menu_item_id)
            menu_item.delete()
            return Response({"message": "Menu item deleted successfully"})
        except MenuItem.DoesNotExist:
            return Response(
                {"error": "Menu item not found"}, status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": f"Error deleting menu item: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
