from django.urls import path
from .views import *

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('cats/', CatList.as_view(), name='cat-list'),
    path('cats/<int:id>/', CatDetail.as_view(), name='cat-detail'),
    path('cats/<int:cat_id>/feed/', FeedList.as_view(), name='feed-list'),
    path('cats/<int:cat_id>/feed/<int:id>/', FeedDetail.as_view(), name='feed-detail'),
    path('toys/', ToyList.as_view(), name='toy-list'),
    path('toys/<int:id>/', ToyDetail.as_view(), name='toy-detail'),
    path('cats/<int:cat_id>/toy/<int:toy_id>/', ModifyToyForCat.as_view(), name='modify-toy-for-cat')
]