from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from .models import *
from .serializers import *

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

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        unassociated_toys = Toy.objects.exclude(id__in=instance.toys.all())
        toys_serializer = ToySerializer(unassociated_toys, many=True)

        return Response({
            'cat': serializer.data,
            'unassociated_toys': toys_serializer.data
        })

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

class ToyList(generics.ListCreateAPIView):
    queryset = Toy.objects.all()
    serializer_class = ToySerializer

class ToyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Toy.objects.all()
    serializer_class  = ToySerializer
    lookup_field = 'id'

# class AddToyToCat(APIView):
#     def post(self, request, cat_id, toy_id):
#         cat = Cat.objects.get(id=cat_id)
#         toy = Toy.objects.get(id=toy_id)
#         cat.toys.add(toy)
#         return Response({
#             'message': f'Toy {toy.name} added to {cat.name}'
#         })

# class RemoveToyFromCat(APIView):
#     def post(self, request, cat_id, toy_id):
#         cat = Cat.objects.get(id=cat_id)
#         toy = Toy.objects.get(id=toy_id)
#         cat.toys.remove(toy)
#         return Response({
#             'message': f'Toy {toy.name} removed from {cat.name}'
#         })

class ModifyToyForCat(APIView):

    def post(self, request, cat_id, toy_id):
        action = request.data.get('action')
        cat = Cat.objects.get(id=cat_id)
        toy = Toy.objects.get(id=toy_id)

        if action == 'add':
            cat.toys.add(toy)
            return Response({
                'message': f'Toy {toy.name} added to {cat.name}'
            })
        elif action == 'remove':
            cat.toys.remove(toy)
            return Response({
                'message': f'Toy {toy.name} removed from {cat.name}'
            })
        else:
            return Response(
                {'error': 'Action not provided. Use "add" or "remove"'},
                status=status.HTTP_400_BAD_REQUEST
            )


__all__ = ["Home", 
    "CatList", 
    "CatDetail", 
    "FeedList", 
    "FeedDetail",
    "ToyList",
    "ToyDetail",
    "ModifyToyForCat"
]