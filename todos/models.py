from django.db import models 
from django.utils import timezone 
  
class Todo(models.Model): 
    title=models.CharField(max_length=100) 
    description=models.TextField(default= None,null=True, blank=True) 
    creation_date=models.DateTimeField(default=timezone.now) 
    end_date=models.DateTimeField(null= True,blank=True)
    completed=models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
  
    def __str__(self): 
        return self.title 