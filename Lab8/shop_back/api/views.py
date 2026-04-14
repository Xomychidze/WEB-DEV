from django.shortcuts import render
from django.http import JsonResponse
from .models import Product
from .models import Category
from django.shortcuts import get_object_or_404
# Create your views here.

def products_list(reguest): 
    product = Product.objects.all()
    data = list(product.values())
    return JsonResponse(data, safe=False)


def product_to_dict(product):
    return {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category_id": product.category_id
    }

def product_detail(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product_to_dict(product))


def categories_list(request): 
    categories = Category.objects.all()
    data = list(categories.values())
    return JsonResponse(data, safe=False)

def category_detail(request, id): 
    category = Category.objects.get(id=id)
    return JsonResponse({
        "id": category.id, 
        "name": category.name
    })

def category_products(request, id): 
    products = Product.objects.filter(category_id=id)
    data = list(products.values())
    return JsonResponse(data, safe=False)


from rest_framework import viewsets
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    @action(detail=True)
    def products(self, request, pk=None):
        products = Product.objects.filter(category_id=pk)
        active_products = Product.objects.filter(is_active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

