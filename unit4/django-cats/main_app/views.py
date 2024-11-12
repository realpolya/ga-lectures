from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import Cat
from .serializers import CatSerializer

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