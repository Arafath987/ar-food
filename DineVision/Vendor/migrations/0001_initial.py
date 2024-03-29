# Generated by Django 5.0.1 on 2024-02-03 08:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Restaurant', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='vendor',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('Profile_picture', models.ImageField(upload_to='vendor/profile')),
                ('name', models.CharField(max_length=50)),
                ('designation', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('restaurant_name', models.CharField(max_length=50)),
                ('restaurant_licence', models.ImageField(upload_to='vendor/licence')),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('last_login', models.DateTimeField(auto_now_add=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('is_approved', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_admin', models.BooleanField(default=True)),
                ('restaurant', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='vendor', to='Restaurant.restaurant')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
