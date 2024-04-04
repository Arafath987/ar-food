from rest_framework import serializers
from .models import Order,OrderItem
from Restaurant.models import MenuItem
from Restaurant.models import MenuItem

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('id', 'name', 'description', 'price', 'time', 'image') 

class OrderSerializer(serializers.ModelSerializer):
    items = MenuItemSerializer(many=True, read_only=True) 

    class Meta:
        model = Order
        fields = ('id', 'table_number', 'items', 'total_price', 'status', 'restaurant')

class OrderItemSupportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['table_number','total_price']

#class MenuItemSerializer(serializers.ModelSerializer):
 #   class Meta:
 #       model = MenuItem
#        fields = ['name']
        # image,price
        
class OrderItemSerializer(serializers.ModelSerializer):
    menu_item = MenuItemSerializer()
    class Meta:
        model = OrderItem
        fields = ['menu_item', 'quantity', 'total_price_item']

class OrderWithItemsSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(source='orderitem_set', many=True)
    total_price = serializers.DecimalField(max_digits=10, decimal_places=2)  # Directly reference the total_price field
    table_number = serializers.IntegerField()  # Directly reference the table_number field

    class Meta:
        model = Order
        fields = ['total_price', 'table_number', 'order_items']
