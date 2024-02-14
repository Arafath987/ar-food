from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from Restaurant.models import Restaurant

class UserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        if not email:
            raise ValueError("User must have an email")

        if not username:
            raise ValueError("User must have a username")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email, password=None, **vendor):
        user = self.create_user(
            email=self.normalize_email(email),
            username=username
        )
        user.is_admin = True
        user.is_active = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class vendor(AbstractBaseUser):
    id = models.BigAutoField(primary_key =True)
    Profile_picture = models.ImageField(upload_to= 'vendor/profile', blank=True, null=True)
    username = models.CharField(max_length=50)
    designation = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(max_length=254, unique=True,)
    restaurant_name = models.CharField(max_length=50)
    restaurant_licence = models.ImageField(upload_to='vendor/licence', blank=True, null=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now_add=True)
    created_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=True)
    restaurant = models.OneToOneField(Restaurant, on_delete=models.CASCADE, null=True, blank=True, related_name='vendor')

    # Specify the custom manager for the User model
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def has_module_perms(self, app_label):
        return self.is_admin
    
    def has_perm(self, perm, obj=None):
        return self.is_admin

    def __str__(self):
        return self.username
