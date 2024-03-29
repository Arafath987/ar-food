from rest_framework import viewsets
from rest_framework.response import Response
from Vendor.models import vendor
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.decorators import login_required
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime
from rest_framework.permissions import IsAuthenticated
from .serializers import (
    UserProfileSerializer,
    LoginSerializer,
    VendorSerializer,
    ChangePasswordSerializer,
)
from rest_framework.views import APIView
from django.contrib.auth.hashers import check_password
from django.contrib.auth import authenticate
from django.http import HttpResponse


class VendorRegistrationView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = VendorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data["email"]
        password = serializer.validated_data["password"]
        user = vendor.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("Invalid email")

        if not user.check_password(password):

            raise AuthenticationFailed("invalid password")

        payload = {
            "id": user.id,
            "email": user.email,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow(),
        }

        token = jwt.encode(payload, "your_secret_key", algorithm="HS256")

        response = Response()
        response.set_cookie(
            key="jwt",
            value=token,
            httponly=False,
            samesite="None",
            secure=True,
            path="/",
        )
        response.data = {"jwt": token, "user": payload}
        return response


class LogOutView(viewsets.ModelViewSet):
    @api_view(["POST"])
    @login_required
    def logout_view(request):
        response = Response()
        response.delete_cookie("jwt")
        response.data = {"message": "success"}
        return response


class UserProfileView(viewsets.ModelViewSet):

    def get_userprofile(self, request):
        token = request.COOKIES.get("jwt")

        if not token:
            raise AuthenticationFailed("User is not authenticated")

        try:
            payload = jwt.decode(token, "your_secret_key", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("User is not authenticated")

        Vendor = vendor.objects.get(id=payload["id"])
        serializer = UserProfileSerializer(Vendor)
        return Response(serializer.data)

    def put(self, request):
        token = request.COOKIES.get("jwt")

        if not token:
            raise AuthenticationFailed("User is not authenticated")

        try:
            payload = jwt.decode(token, "your_secret_key", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("User is not authenticated")

        Vendor = vendor.objects.get(id=payload["id"])
        serializer = UserProfileSerializer(Vendor, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChangingViewSet(viewsets.ModelViewSet):

    def change_password(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            old_password = serializer.validated_data.get("old_password")
            new_password = serializer.validated_data.get("new_password")

            token = request.COOKIES.get("jwt")
            if not token:
                raise AuthenticationFailed("User is not authenticated")
            try:
                payload = jwt.decode(token, "your_secret_key", algorithms=["HS256"])
            except jwt.ExpiredSignatureError:
                raise AuthenticationFailed("User is not authenticated")

            Vendor = vendor.objects.get(id=payload["id"])

            # Check if the old password is correct
            if not Vendor.check_password(old_password):
                return Response(
                    {"error": "Invalid old password"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

            # Change the password
            Vendor.set_password(new_password)
            Vendor.save()

            return Response(
                {"message": "Password changed successfully"}, status=status.HTTP_200_OK
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
