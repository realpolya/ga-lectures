from django.db import models

# Tuple of Tuples (1 - value, 2 - human readable version)
MEALS = (
    ('B', 'Breakfast'),
    ('L', 'Lunch'),
    ('D', 'Dinner')
)

MOODS = (
    ('M', 'Moody'),
    ('H', 'Happy'),
    ('E', 'Ecstatic'),
    ('G', 'Grumpy'),
    ('P', 'Peaceful')
)

class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    age = models.IntegerField()
    mood = models.CharField(
        'Current Mood',
        max_length=1,
        choices=MOODS,
        default=MOODS[1][0]
    )

    def __str__(self):
        return f"{self.get_mood_display()} cat {self.name}"


class Feeding(models.Model):
    date = models.DateField('Feeding Date')
    meal = models.CharField(
        max_length=1,
        choices=MEALS,
        default=MEALS[0][0]
    )
    cat = models.ForeignKey(Cat, on_delete=models.CASCADE) # cat_id in db

    def __str__(self):
        # get_blank_display() for Field with choices
        return f"{self.cat} consumed {self.get_meal_display()} on {self.date}"
