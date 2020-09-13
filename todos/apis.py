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
		"""Retrieve the todos for the authenticated user"""
		queryset = self.queryset
		status = None
		status_params = self.request.query_params.get('status')
		if status_params is not None and status_params != '':
			status = bool(int(status_params))
		if status is not None:
			queryset = queryset.filter(completed=status)

		return queryset.filter(owner=self.request.user)

	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)