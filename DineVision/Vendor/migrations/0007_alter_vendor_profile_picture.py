# Generated by Django 3.2.11 on 2024-03-01 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Vendor', '0006_vendor_profile_picture_vendor_restaurant_licence'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='Profile_picture',
            field=models.ImageField(blank=True, null=True, storage='storages.backends.s3boto3.S3Boto3Storage', upload_to='vendor/profile'),
        ),
    ]
