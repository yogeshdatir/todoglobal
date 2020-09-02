from rest_framework import serializers
from .models import Todo 		#import models in your project

# Todo serializer

class TodoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Todo
		fields = '__all__'