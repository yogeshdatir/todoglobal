from .models import Todo
from rest_framework import viewsets, permissions
from .serializers import TodoSerializer			# import yout serializers

# Todo ViewSet

class TodoViewSet(viewsets.ModelViewSet):
	queryset = Todo.objects.all()
	permission_classes = [
		permissions.IsAuthenticated,
	]
	serializer_class = TodoSerializer

	def get_queryset(self):
		return self.request.user.client.all()

	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)