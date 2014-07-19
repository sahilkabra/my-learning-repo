from django.db import models

# Create your models here.
class Poll (models.Model):
	question = models.CharField(max_length=20)
	pub_date = models.DateTimeField("Publication Date")
	
class Choice (models.Model):
	poll = models.ForeignKey(Poll)
	choice = models.CharField(max_length=20)
	votes = models.IntegerField()