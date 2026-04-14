# shop-back — Django Online Shop API

Backend API for the Online Shop Angular app. Built with Django + Django REST Framework.

## Setup

```bash
# 1. Create and activate virtual environment
python -m venv venv

# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run migrations
python manage.py migrate

# 4. Create superuser (for admin panel)
python manage.py createsuperuser

# 5. Seed the database (4 categories + 20 products)
python seed_data.py

# 6. Start the server
python manage.py runserver
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products/ | List all products |
| GET | /api/products/{id}/ | Get product by ID |
| POST | /api/products/ | Create product |
| PUT | /api/products/{id}/ | Update product |
| DELETE | /api/products/{id}/ | Delete product |
| GET | /api/categories/ | List all categories |
| GET | /api/categories/{id}/ | Get category by ID |
| POST | /api/categories/ | Create category |
| PUT | /api/categories/{id}/ | Update category |
| DELETE | /api/categories/{id}/ | Delete category |
| GET | /api/categories/{id}/products/ | Products by category |

## Admin Panel

Visit http://127.0.0.1:8000/admin/ and log in with your superuser credentials.
