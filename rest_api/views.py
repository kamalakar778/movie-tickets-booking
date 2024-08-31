from audioop import avg
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse, Http404, HttpResponseBadRequest
from .data import books
from .serializers import *
from .data import *
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.core.paginator import Paginator
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import JSONParser

import json
import re

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import *
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import authentication_classes
from rest_framework.authtoken.models import Token

@api_view(['GET'])
def index(request):
    return render(request, 'index.html')


@csrf_exempt
@api_view(['POST'])
def user_signup(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            # Hash the password before saving it to the database
            serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            serializer.save()
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class SignUpView(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         # user_data = json.loads(request.body)
#         if serializer.is_valid():
#             user = serializer.save()
#             refresh = RefreshToken.for_user(user)
#             return JsonResponse({
#                 'refresh': str(refresh),
#                 'access_token': str(refresh.access_token)
#             }, status = status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
@api_view(['POST'])
@authentication_classes([SessionAuthentication])
def user_signin(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
        
        if user.check_password(password):
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key, 'user_id': user.id}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)

        
# class SignInView(APIView):
#     def post(self, request):
#         serializer = LoginSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.validated_data
#             refresh = RefreshToken.for_user(user)
#             return JsonResponse({
#                 'refresh': str(refresh),
#                 'access_token': str(refresh.access_token)
#             }, status = status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class SignInView(APIView):
#     def post(self, request):
#         serializer = LoginSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.validated_data
#             refresh = RefreshToken.for_user(user)
#             return JsonResponse({
#                 'refresh': str(refresh),
#                 'access_token': str(refresh.access_token)
#             }, status = status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AuthenticationAPI(APIView):
    def post(self, request):
        permission_classes = [IsAuthenticated]
        if(permission_classes):
            return JsonResponse({"pending Redirect to Login"})
        else:
            return JsonResponse({"Logout"})

       

class MoviesAPI(APIView):
    def get(self, request):
        movies_list = Movies.objects.all().values()
        return JsonResponse(list(movies_list), safe=False)

    def post(self,request):
        movie_data = json.loads(request.body)
        try:
            update_movie = Movies.objects.update(**book_data)
            return JsonResponse(update_movie, status=201, safe=False)
        except Exception as e:
            return HttpResponseBadRequest(str(e))

class AvailableSeats(APIView):
    def get(self, request):
        seatsList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        for a in range(len(seatsList)):
            print(seatsList[a])
        seats = Seats.objects.all().values()
        return JsonResponse(list(seats), safe=False)
    
    def post(self, request):
        reserveSeats = json
        pass

    def put(self, request):
        pass

class BookingAPI(APIView):
    def get(self, request):
        pass
    
    def post(self, request):
        pass

class TicketsAPI(APIView):
    def get(self, request):
        tickets = Tickets.objects.all().values()
        return JsonResponse(list(tickets), safe=False)
    
    def post(self, request):
        pass



# class TicketsBought(View):

#     def get(self, request, review_id):
#         review = BookReview.objects.get(review_id=review_id)

#         if (review):
#             user = User.objects.get(user_id=review.user_id)
#             response_data = {
#                 "review_id": review.review_id,
#                 "book_id": review.book_id,
#                 "user": {
#                     "user_id": user.user_id,
#                     "name": user.name,
#                     "email": user.email
#                 },

#                 "comment": review.comment,
#                 "rating": review.rating
#             }

#             return JsonResponse(response_data)
#         else:
#             return JsonResponse({"msg": "review not found"})


# class UserReviews(View):

#     def get(self, request, user_id):
#         user = User.objects.get(user_id=user_id)

#         if (user):
#             reviews = BookReview.objects.filter(user_id=user_id)
#             review_list = []
#             for each in reviews:
#                 review_data = {
#                     "review_id": each.review_id,
#                     "book_id": each.book_id,
#                     "comment": each.comment,
#                     "rating": float(each.rating)
#                 }
#                 review_list.append(review_data)

#             response_data = {
#                 "user_id": user.user_id,
#                 "name": user.name,
#                 "email": user.email,
#                 "reviews": review_list
#             }
#             return JsonResponse(response_data)
#         else:
#             return JsonResponse({"msg": "user not found"})


# class BookAuthors(View):

#     def get(self, request, book_id):
#         book = Book.objects.get(book_id=book_id)
#         authors = book.authors.all()
#         authors_list = []

#         for each in authors:
#             auth_data = {
#                 "author_id": each.author_id,
#                 "name": each.name
#             }
#             authors_list.append(auth_data)

#         response = {
#             "book_id": book_id,
#             "title": book.title,
#             "authors": authors_list
#         }
#         return JsonResponse(response)


# class AuthorBooks(View):

#     def get(self, request, author_id):
#         author = Author.objects.get(author_id=author_id)
#         books = author.books.all()
#         books_list = []

#         for each in books:
#             book_data = {
#                 "book_id": each.book_id,
#                 "title": each.title
#             }
#             books_list.append(book_data)

#         response = {
#             "author_id": author_id,
#             "name": author.name,
#             "books": books_list
#         }
#         return JsonResponse(response)



# class BookListById(View):
#     def get(self, request, id):
#         book = next((book for book in books if book['book_id'] == id), None)
#         return JsonResponse(book, safe=False)


# # class ProductList(View):
# #     # def get(self,request):
# #     def get(self, request):
# #         serialized_products = ProductSerializer(products, many=True)
# #         # return JsonResponse(products, safe=False)
# #         return JsonResponse(serialized_products.data, safe=False)


# class ProductListById(View):
#     def get(self, request, id):
#         product = next(
#             (product for product in products if products['product_id'] == id), None)
#         return JsonResponse(product, safe=False)


# class BookDetail(View):
#     def get(self, request, book_id):
#         bookFound = None
#         for book in books:
#             if book["book_id"] == book_id:
#                 bookFound = book
#                 break

#         if bookFound:
#             return JsonResponse(BookSerializer(bookFound).data, safe=False)
#         else:
#             raise Http404("Book not found")


# class BookReviewGet(View):
#     def get(self, request):
#         reviews = BookReview.objects.all().values()
#         return JsonResponse(list(reviews), status=201, safe=False)


# class BookReviewAdd(View):

#     def post(self, request, book_id):

#         # Parse data from req.body (json)
#         review_data = json.loads(request.body)
#         # review_data["review_id"]=len(BookReview)+1
#         review_data["book_id"] = book_id
#         try:
#             BookReview.objects.create(**review_data)
#             return JsonResponse(review_data, status=201, safe=False)
#         except Exception as e:
#             return HttpResponseBadRequest(str(e))


# # class BookReview(View):

# #     def post(self, request, book_id):
# #         # Parse data from req.body (json)
# #         review_data=json.loads(request.body)
# #         review_data["book_id"]=book_id
# #         review_data["review_id"]=len(book_reviews)+1

# #         #Validate data using serializer
# #         review_serialized=BookReviewSerializer(data=review_data)

# 0  # if(review_serialized.is_valid()):
# #             book_reviews.append(review_serialized.data)
# #             return JsonResponse(book_reviews, status=201, safe=False)
# #         else:
# #             return HttpResponseBadRequest()


# class BookReviewUpdate(View):

#     def put(self, request, review_id):
#         # Parse data from req.body.
#         review_data = json.loads(request.body)
#         try:
#             review = BookReview.objects.get(review_id=review_id)
#             for key, value in review_data.items():
#                 setattr(review, key, value)
#                 return JsonResponse(review, status=200, safe=False)
#         except Exception as e:
#             return HttpResponseBadRequest(str(e))


# class BookReviewDelete(View):

#     def delete(self, request, review_id):

#         for index, item in enumerate(book_reviews):

#             if (item["review_id"] == review_id):
#                 book_reviews.remove(item)
#                 return JsonResponse("Review is deleted", safe=False, status=200)

#         return HttpResponseBadRequest()
    
# # Add products to cart_items
# # class UserSignUp(View):
# #     def post(self, request):
# #         user_data = json.loads(request.body)
# #         user_serialized = UserSerializer(data=user_data)
# #         # user_data["user_id"]=len(Users)+1

# #         if (user_serialized.is_valid()):
# #             Users.append(user_serialized.data)
# #             return JsonResponse(f"${Users} successfully Registered", status=201, safe=False)
# #         else:
# #             return HttpResponseBadRequest()

# class BookSearchAPi(View):

#     def get(self, request, search_text):

#         match_books = Book.objects.filter(title_icontains=search_text)

#         serialized_books = [{
#             'title': book.title,
#             'price': book.price,
#             'book_id': book.book_id
#         } for book in match_books]

#         return JsonResponse(serialized_books, safe=False)


# class BookFilterApi(View):
#     def get(self, request):
#         author = request.GET.get("author")
#         min_price = request.GET.get('min')
#         max_price = request.GET.get('max')
#         books = Book.objects.all()
#         if author:
#             books = books.filter(authors_name=author)

#         if min_price:
#             books = books.filter(price_gte=min)
#         if max_price:
#             books = books.filter(price_lte=max_price)

#         serialized_books = [{
#             'title': book.title,
#             'price': book.price,
#             'book_id': book.book_id
#         } for book in books]
#         return JsonResponse(serialized_books, safe=False)


# class BookPaginationApi(View):
#     def get(self, request):
#         permission_classes = [IsAuthenticated]
#         books = Book.objects.all().values()
#         paginator = Paginator(books, 5)
#         number = request.GET.get('page')
#         page_obj = Paginator.get_page(number)
#         book_pages = page_obj.object_list
#         serialized = BookSerializer(book_pages, many=True).data
#         return JsonResponse({
#             'books': serialized,
#             'total_pages': paginator.num_pages
#         })


# class BookAggregate(View):
#     def get (self, request):
#         books = Book.objects.filter(price_gt=15).aggregate(avg_price=avg('price'))
#         resp = {
#             'avg_price': books['avg_price']
#         }
#         return JsonResponse (resp)



# # class UserSignIn(View):
# #     def post(self, request):
# #         user_data = json.loads(request.body)
# #         user_serialized = UserSerializer(data=user_data)
# #         print(Users)
# #         for index, item in enumerate(Users):
# #             if (item["email"] == user_data["email"] and item["password"] == user_data["password"]):
# #                 return JsonResponse("Login is Successful", safe=False, status=200)
# #         return HttpResponseBadRequest()