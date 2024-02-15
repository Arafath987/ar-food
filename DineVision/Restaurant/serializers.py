from rest_framework import serializers
from Restaurant.models import Category, MenuItem


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class CustomerCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name']

class CategoryUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']

class FrontPageMenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItem
        fields = ['id','name', 'price', 'image','time','rating', 'category', 'restaurant']

class CustomerMenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItem
        fields = ['id','name', 'description', 'price', 'image','time','rating','category', 'restaurant']

class SuperuserMenuItemSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = MenuItem
        fields = ['id','name', 'description','category', 'price','time','owner','restaurant']


class MenuItemUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['id','name', 'description', 'price', 'category', 'is_available', 'image', 'time']
                  