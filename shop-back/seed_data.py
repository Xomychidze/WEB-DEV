"""
Run this script to populate the database with sample data.
Usage: python seed_data.py
(Make sure to run migrations first: python manage.py migrate)
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# Create 4 categories
electronics = Category.objects.create(name='Electronics')
clothing = Category.objects.create(name='Clothing')
books = Category.objects.create(name='Books')
sports = Category.objects.create(name='Sports')

print('Categories created.')

# Create 20 products (5 per category)
products = [
    # Electronics
    Product(name='iPhone 15', price=999.99, description='Apple iPhone 15 128GB', count=50, is_active=True, category=electronics),
    Product(name='Samsung Galaxy S24', price=849.99, description='Samsung Galaxy S24 256GB', count=40, is_active=True, category=electronics),
    Product(name='MacBook Air M2', price=1199.99, description='Apple MacBook Air with M2 chip', count=20, is_active=True, category=electronics),
    Product(name='Sony WH-1000XM5', price=349.99, description='Noise-cancelling wireless headphones', count=60, is_active=True, category=electronics),
    Product(name='iPad Pro 12.9"', price=1099.99, description='Apple iPad Pro 12.9 inch 256GB', count=30, is_active=False, category=electronics),

    # Clothing
    Product(name='Nike Air Max 270', price=129.99, description='Men\'s running shoes', count=80, is_active=True, category=clothing),
    Product(name='Levi\'s 501 Jeans', price=69.99, description='Classic straight fit jeans', count=100, is_active=True, category=clothing),
    Product(name='Adidas Hoodie', price=59.99, description='Comfortable cotton hoodie', count=75, is_active=True, category=clothing),
    Product(name='Zara Leather Jacket', price=199.99, description='Black genuine leather jacket', count=25, is_active=True, category=clothing),
    Product(name='H&M T-Shirt Pack', price=29.99, description='Pack of 3 basic cotton t-shirts', count=150, is_active=False, category=clothing),

    # Books
    Product(name='Clean Code', price=39.99, description='A Handbook of Agile Software Craftsmanship by Robert C. Martin', count=45, is_active=True, category=books),
    Product(name='The Pragmatic Programmer', price=44.99, description='Your Journey to Mastery by David Thomas', count=35, is_active=True, category=books),
    Product(name='Django for Beginners', price=29.99, description='Build websites with Python and Django', count=55, is_active=True, category=books),
    Product(name='Deep Learning', price=79.99, description='By Ian Goodfellow, Yoshua Bengio, and Aaron Courville', count=20, is_active=True, category=books),
    Product(name='Atomic Habits', price=19.99, description='An Easy & Proven Way to Build Good Habits by James Clear', count=90, is_active=True, category=books),

    # Sports
    Product(name='Yoga Mat', price=34.99, description='Non-slip premium yoga mat 6mm', count=70, is_active=True, category=sports),
    Product(name='Dumbbell Set 20kg', price=89.99, description='Adjustable dumbbell set with rack', count=30, is_active=True, category=sports),
    Product(name='Jump Rope', price=14.99, description='Speed jump rope with ball bearings', count=120, is_active=True, category=sports),
    Product(name='Resistance Bands Set', price=24.99, description='Set of 5 resistance bands different levels', count=85, is_active=False, category=sports),
    Product(name='Foam Roller', price=29.99, description='High density foam roller for muscle recovery', count=60, is_active=True, category=sports),
]

Product.objects.bulk_create(products)
print(f'Created {len(products)} products.')
print('Done! You can now run: python manage.py runserver')
