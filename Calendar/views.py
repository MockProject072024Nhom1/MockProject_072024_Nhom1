from django.shortcuts import render
from datetime import datetime, timedelta
from .models import Timekeeping, Dayoff
# Create your views here.

def bg_calendar(request, bg_id):
    week = calculateDayOfWeek()
    contracts = Timekeeping.objects.filter(bgid = bg_id).values_list('contractid', flat=True)
    return render(request, "SC_30_2.html", {
        "week" : week,
        "contracts": contracts
    })

def calculateDayOfWeek():
    week = [0,0,0,0,0,0,0]
    dt = datetime.now()
    dt_copy = datetime.now()
    week_index = dt.weekday()
    week_index_copy = week_index+1
    for i in range(7):
        if (week_index >= 0):
            week[week_index] = dt.day
            dt = dt - timedelta(days=1)
            week_index -= 1
        else:
            dt_copy = dt_copy + timedelta(days=1)
            week[week_index_copy] = dt_copy.day
            week_index_copy += 1
    return week