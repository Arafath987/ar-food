from django.db import models
from django.contrib.auth.models import User
import uuid

class Restaurant(models.Model):
    owner = models.ForeignKey('Vendor.vendor', on_delete=models.CASCADE, related_name='owned_restaurants')
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    id = models.BigAutoField(primary_key=True)
    owner = models.ForeignKey('Vendor.vendor', on_delete=models.CASCADE, null = True)
    name = models.CharField(max_length=255)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='categories', null = True)

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    id = models.BigAutoField(primary_key=True)
    owner = models.ForeignKey('Vendor.vendor', on_delete=models.CASCADE, null = True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    time = models.TimeField()
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    is_available = models.BooleanField(default=True)
    image = models.ImageField(upload_to='menu_item_images/', null=True, blank=True)
    three_d_image = models.FileField(upload_to='menu_item_3d_images/', null=True, blank=True)

    def __str__(self):
        return self.name