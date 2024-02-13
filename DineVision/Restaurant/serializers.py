from rest_framework import serializers
from Restaurant.models import Category, MenuItem


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class CategoryUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class FrontPageMenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItem
        fields = ['name', 'price', 'image','time','rating']

class CustomerMenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItem
        fields = ['name', 'description', 'price', 'image','time','rating']

class SuperuserMenuItemSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = MenuItem
        fields = ['name', 'description', 'price', 'rating', 'is_available', 'time']


class MenuItemUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['name', 'description', 'price', 'category', 'is_available', 'image', 'time']
                  