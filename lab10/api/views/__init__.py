# Переключи импорт, чтобы активировать нужный уровень:

# Level 2 — Function-Based Views
# from .fbv import products_list, product_detail

# Level 3 — Class-Based Views
# from .cbv import ProductListAPIView, ProductDetailAPIView

# Level 4 — Mixins
# from .mixins import ProductListAPIView, ProductDetailAPIView

# Level 5 — Generics (активен)
from .generics import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
