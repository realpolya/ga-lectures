# Generated by Django 5.1.3 on 2024-11-12 19:58

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0005_alter_feeding_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feeding',
            name='date',
            field=models.DateField(default=datetime.date.today, verbose_name='Feeding Date'),
        ),
    ]
