from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet, PlaceOrderViewSet, RateMenuItemView, OrderItemViewSet

router = DefaultRouter()
router.register(r'place-order', PlaceOrderViewSet, basename='place-order')
router.register(r'orders', OrderViewSet, basename='orders')
router.register(r'rate-menu-item', RateMenuItemView, basename='rate-menu-item')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/place-order', PlaceOrderViewSet.as_view({'post': 'place_order'}), name='place-order'),
    path('api/orders/ordered-items', OrderViewSet.as_view({'get': 'ordered_items'}), name='ordered-items'),
    path('api/orders/<int:order_id>/proceed-to-preparation/', OrderViewSet.as_view({'post': 'proceed_to_preparation'}), name='proceed-to-preparation'),
    path('api/orders/preparation-orders/', OrderViewSet.as_view({'get': 'preparation_orders'}), name='preparation-orders'),
    path('api/orders/<int:order_id>/proceed-to-delivery/', OrderViewSet.as_view({'post': 'proceed_to_delivery'}), name='proceed-to-delivery'),
    path('api/orders/orders-delivered/', OrderViewSet.as_view({'get': 'orders_delivered'}), name='orders-delivered'),
    path('api/rate-menu-item/<int:menu_item_id>/', RateMenuItemView.as_view({'post': 'post'}), name='rate-menu-item-post'),
    path('api/order-items/<int:order_id>', OrderItemViewSet.as_view({'get':'Order_item_details'}), name='get_order_item_details'),
]