from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import Cat, Feeding
from .serializers import CatSerializer, FeedingSerializer

# Create your views here.
class Home(APIView):
    
    def get(self, request):
        content = {
            'message': 'Cats are here...'
        }
        return Response(content)

class CatList(generics.ListCreateAPIView):
    queryset = Cat.objects.all()
    serializer_class  = CatSerializer

class CatDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cat.objects.all()
    serializer_class  = CatSerializer
    lookup_field = 'id'

class FeedList(generics.ListCreateAPIView):
    serializer_class = FeedingSerializer

    def get_queryset(self):
        cat_id = self.kwargs['cat_id']
        return Feeding.objects.filter(cat_id=cat_id)
    
    def perform_create(self, serializer):
        cat_id = self.kwargs['cat_id']
        cat = Cat.objects.get(id=cat_id)
        serializer.save(cat=cat)

class FeedDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FeedingSerializer
    lookup_field = 'id'

    def get_queryset(self):
        cat_id = self.kwargs['cat_id']
        return Feeding.objects.filter(cat_id=cat_id)