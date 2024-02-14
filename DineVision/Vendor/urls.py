from django.urls import path
from .views import VendorRegistrationView, LoginView, LogOutView, UserProfileView, ChangingViewSet

urlpatterns = [
    path('login', LoginView.as_view(), name='login-view'),
    path('register', VendorRegistrationView.as_view(), name='vendor-register'),
    path('logout', LogOutView.as_view({'post':'logout_view'}), name='logout-view'),
    path('user_profile', UserProfileView.as_view({'get':'get_userprofile'}), name='user_profile'),
    path('change_password', ChangingViewSet.as_view({'post':'change_password'}), name='change-password'),
]
