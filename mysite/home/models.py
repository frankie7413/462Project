from django.db import models
from django.utils import timezone
import datetime 
# Create your models here.

#course belongs to major 
#course will have primary key of major
class Major(models.Model):
	major_text = models.CharField(max_length=200)
	def __str__(self):
		return self.major_text

class Course(models.Model):
	major = models.ForeignKey(Major)
	course_text = models.CharField(max_length=200)
	def __str__(self):
		return self.course_text
