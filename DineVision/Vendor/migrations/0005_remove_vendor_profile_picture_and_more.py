# Generated by Django 5.0.1 on 2024-02-04 20:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Vendor', '0004_vendor_is_staff'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vendor',
            name='Profile_picture',
        ),
        migrations.RemoveField(
            model_name='vendor',
            name='restaurant_licence',
        ),
    ]
