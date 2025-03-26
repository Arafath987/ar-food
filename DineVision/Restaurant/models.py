from django.db import models
from django.contrib.auth.models import User
import uuid
from django.conf import settings


class Restaurant(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    restaurant_licence = models.ImageField(upload_to="vendor/licence", blank=True, null=True)
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Category(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='categories', null = True)

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    time = models.CharField(max_length=255,null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE,null=True)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE,null=True)
    is_available = models.BooleanField(default=True)
    image = models.ImageField(null=True, blank=True)
    three_d_image = models.FileField(null=True, blank=True)

    def __str__(self):
        return self.name