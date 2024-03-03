from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    position = models.TextField()
    office = models.CharField(max_length=100)
    age = models.IntegerField()
    startDate = models.DateField()
    salary = models.DecimalField(max_digits=20, decimal_places=3)
