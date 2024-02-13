from rest_framework import viewsets
from rest_framework.response import Response
from Vendor.models import vendor
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.decorators import login_required
from rest_framework.exceptions import AuthenticationFailed
import jwt,datetime
from rest_framework.permissions import IsAuthenticated
from .serializers import UserProfileSerializer, LoginSerializer, VendorSerializer
from rest_framework.views import APIView
from django.contrib.auth.hashers import check_password
from django.contrib.auth import authenticate

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

        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        user = vendor.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('Invalid email')
        
        if not user.check_password(password):

            raise AuthenticationFailed('invalid password')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'your_secret_key', algorithm='HS256')

        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response

class LogOutView(viewsets.ModelViewSet):
    @api_view(['POST'])
    @login_required
    def logout_view(request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message':'success'
    }
        return response
    
class UserProfileView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User is not authenticated')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        serializer = UserProfileSerializer(Vendor)
        return Response(serializer.data)

    def put(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('User is not authenticated')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('User is not authenticated')
        
        Vendor = vendor.objects.get(id=payload['id'])
        serializer = UserProfileSerializer(Vendor, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)