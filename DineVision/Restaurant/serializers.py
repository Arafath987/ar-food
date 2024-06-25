from rest_framework import serializers
from Restaurant.models import Category, MenuItem
from storages.backends.s3boto3 import S3Boto3Storage

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

class CreateMenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItem
        fields = ['id','name', 'description', 'price', 'time','category','restaurant']

   # def create(self, validated_data):
    #    image = validated_data.pop('image', None)
     #   three_d_image = validated_data.pop('three_d_image', None)


class MenuItemUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = ['id','name', 'description', 'price', 'category', 'is_available', 'image', 'time']
                  