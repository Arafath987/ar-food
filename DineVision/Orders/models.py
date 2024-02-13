from django.db import models
from Restaurant.models import Restaurant,MenuItem,Category

class Order(models.Model):
    ORDER_STATUS_CHOICES = [
        ('ordered', 'Ordered'),
        ('preparing', 'Preparing'),
        ('delivered', 'Delivered'),
    ]

    id = models.BigAutoField(primary_key=True)
    table_number = models.IntegerField()
    items = models.ManyToManyField(MenuItem, through='OrderItem',)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, null = True)
    status = models.CharField(max_length=20, choices=ORDER_STATUS_CHOICES, default='ordered')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE, null = True)
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"Order {self.id} - Table {self.table_number}"
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    total_price_item = models.DecimalField(max_digits=10, decimal_places=2, null = True)
    def __str__(self):
        return f"{self.quantity} x {self.menu_item.name} in Order {self.order.id}"
