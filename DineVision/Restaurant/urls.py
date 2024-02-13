from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, MenuItemViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='category')
router.register(r'menuitems', MenuItemViewSet, basename='menuitem')

urlpatterns = [
    path('api/', include(router.urls)),
    path('view-category', CategoryViewSet.as_view({'get': 'view_category'}), name='view-category'),
    path('categories/create', CategoryViewSet.as_view({'post': 'create_category'}), name='categories-create'),
    path('categories/<int:category_id>/update', CategoryViewSet.as_view({'put': 'update_category'}),name='category-detail'),
    path('categories/<int:category_id>/delete', CategoryViewSet.as_view({'delete': 'delete_category'}),name='category-detail'),
    path('get-menu-items/<str:restaurant_name>', MenuItemViewSet.get_menu_items, name='get-menu-items'),
    path('menuitems-by_category/<int:category_id>', MenuItemViewSet.as_view({'get': 'by_category'}), name='menuitem-by-category'),
    path('menuitems/<int:menu_item_id>/detail', MenuItemViewSet.as_view({'get': 'item_detail'}), name='menuitem-detail'),
    path('admin_menuitems/<int:menu_item_id>/detail', MenuItemViewSet.as_view({'get': 'admin_item_detail'}), name='menuitem-detail'),
    path('menuitems/<int:category_id>/create', MenuItemViewSet.as_view({'post': 'create_menuitem'}), name='menuitem-create'),
    path('update_menu_item/<int:menu_item_id>', MenuItemViewSet.as_view({'put': 'update_menuitem'}), name='menuitem-update'),
    path('delete_menu_item/<int:menu_item_id>', MenuItemViewSet.as_view({'delete': 'delete_menuitem'}), name='menuitem-delete'),

    ]