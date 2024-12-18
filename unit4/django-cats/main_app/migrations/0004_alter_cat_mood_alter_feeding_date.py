# Generated by Django 5.1.3 on 2024-11-12 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0003_cat_mood'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cat',
            name='mood',
            field=models.CharField(choices=[('M', 'Moody'), ('H', 'Happy'), ('E', 'Ecstatic'), ('G', 'Grumpy'), ('P', 'Peaceful')], default='H', max_length=1, verbose_name='Current Mood'),
        ),
        migrations.AlterField(
            model_name='feeding',
            name='date',
            field=models.DateField(verbose_name='Feeding Date'),
        ),
    ]
