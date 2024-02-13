from rest_framework import serializers
from .models import Order,OrderItem
from Restaurant.models import MenuItem

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class OrderItemSupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['table_number','total_price']

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['name']
        # image,price
        
class OrderItemSerializer(serializers.ModelSerializer):
    menu_item = MenuItemSerializer(source='menu_item')
    order_details = OrderItemSupportSerializer()
    class Meta:
        model = OrderItem
        fields = ['menu_item', 'quantity', 'order_details', 'total_price_item']