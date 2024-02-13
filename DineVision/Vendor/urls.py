from django.urls import path
from .views import VendorRegistrationView, LoginView, LogOutView

urlpatterns = [
    path('api/login/', LoginView.as_view(), name='login-view'),
    path('api/register/', VendorRegistrationView.as_view(), name='vendor-register'),
    path('api/logout/', LogOutView.as_view({'post':'logout_view'}), name='logout-view'),
]
