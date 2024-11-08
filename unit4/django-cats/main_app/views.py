from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class Home(APIView):
    
    def get(self, request):
        content = {
            'message': 'Cats are here...'
        }
        return Response(content)