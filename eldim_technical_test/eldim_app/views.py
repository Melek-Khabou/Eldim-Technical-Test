from django.shortcuts import render
from django.core.serializers import serialize
from django.core.serializers.json import DjangoJSONEncoder
from .models import Employee
import json

def home(request):
    employees = Employee.objects.all()
    
    fields = ['name', 'position', 'office', 'age', 'startDate', 'salary']

    data = list(employees.values(*fields))

    data_json = json.dumps(data, cls=DjangoJSONEncoder)

    return render(request,'base.html',{'data': data_json})