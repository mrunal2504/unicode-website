# Generated by Django 2.1.4 on 2019-01-26 12:13

import blog.models
from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profiles', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(max_length=200)),
                ('text', models.TextField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('approved_comment', models.BooleanField(default=False)),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('cover', models.ImageField(blank=True, upload_to=blog.models.upload_location)),
                ('content', models.TextField()),
                ('slug', models.SlugField(blank=True)),
                ('technologies', multiselectfield.db.fields.MultiSelectField(choices=[('web', 'Web Development'), ('app', 'App Development'), ('design', 'Web Design')], max_length=14)),
                ('draft', models.BooleanField(default=False)),
                ('publish', models.DateField()),
                ('updated', models.DateTimeField(auto_now=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='profiles.UserProfile')),
            ],
            options={
                'ordering': ['-timestamp', '-updated'],
            },
        ),
        migrations.AddField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='blog.Post'),
        ),
    ]
