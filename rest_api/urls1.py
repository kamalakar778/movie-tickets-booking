from django.urls import path

from .views import *
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    #users/  #POST GET PUT DELETE
    #POST (sign up), GET (get user details), PUT (update user details), DELETE (remove user)
    path('', csrf_exempt(home), name="Home"),
    path('users/signup/', user_signup, name="signup"),
    path('users/signin/',  user_signin, name="signin"),
    # path('users/signin/', csrf_exempt(SignInView.as_view()), name="signin"),
    path('users/update/', csrf_exempt(user_signup), name="update-signup"),
    path('users/delete/', csrf_exempt(user_signup), name="delete-user"),
    
    #auth/  #POST DELETE
    #Methods: POST (login), DELETE (logout)
    path('auth/user/login/', csrf_exempt(AuthenticationAPI.as_view()), name="user-auth-signin"),
    path('auth/user/logout/', csrf_exempt(AuthenticationAPI.as_view()), name="user-auth-logout"),
    
    #movies/  #POST GET PUT DELETE
    #Methods: GET (fetch all movies), POST (admin only: add new movie), PUT (admin only: update movie), DELETE (admin only: delete movie)
    #Filters: genre, language, location, rating
    path('movies/', csrf_exempt(MoviesAPI.as_view()), name="get-movies"),
    path('movies/add/', csrf_exempt(MoviesAPI.as_view()), name="add-movie"),
    path('movies/update/', csrf_exempt(MoviesAPI.as_view()), name="update-movie"),
    path('movies/delete/', csrf_exempt(MoviesAPI.as_view()), name="delete-movie"),

    #seats/  #POST GET PUT
    #Methods: GET (fetch all seats for a specific movie), POST (reserve seats), PUT (update seat reservation)
    path('seats/', csrf_exempt(AvailableSeats.as_view()), name='get-seats'),
    path('seats/post/', csrf_exempt(AvailableSeats.as_view()), name='post-seats'),
    path('seats/update/', csrf_exempt(AvailableSeats.as_view()), name='update-seats'),

    #booking/  #POST GET PUT DELETE
    #Methods: GET (fetch booking summary), POST (create a new booking)
    path('booking/', csrf_exempt(BookingAPI.as_view()), name='get-booking-list'),
    path('booking/post/', csrf_exempt(BookingAPI.as_view()), name='post-booking'),
    path('booking/update/', csrf_exempt(BookingAPI.as_view()), name='update-booking'),
    path('booking/delete/', csrf_exempt(BookingAPI.as_view()), name='delete-booking'),

    #tickets/  #POST GET
    #Methods: GET (fetch all booked tickets), POST (book a new ticket)
    path('tickets/', csrf_exempt(TicketsAPI.as_view()), name='get-tickets'),
    path('tickets/buy/', csrf_exempt(TicketsAPI.as_view()), name='post-tickets'),

    # path('movies/search/<str:search_text>/', csrf_exempt(MoviesSearchAPi.as_view()), name='search-movies'),
    # path('movies/filter/', csrf_exempt(FilterMovies.as_view()), name='filter-movies'),
    # path("movies/<int:id>/", csrf_exempt(MoviesById.as_view()), name="movies-by-id"),

    # path('books/add/', csrf_exempt(BookList.as_view()), name="add-book"),
    # path('books/reviews/', csrf_exempt(BookReviewGet.as_view()), name='book-review-add'),
    # path("products/", ProductList.as_view(),name="products-list"),
    # path('books/<int:id>/', BookListById.as_view(), name="book-list-by-id"),
    # path('books/<int:book_id>/', BookDetail.as_view(), name="book-detail"),

    # path('books/search/<str:search_text>/', csrf_exempt(BookSearchAPi.as_view()), name='search-of-book'),
    # path('books/<int:book_id>/reviews/', csrf_exempt(BookReviewAdd.as_view()), name='book-review-add'),
    # path('reviews/<int:review_id>/', csrf_exempt(BookReviewUpdate.as_view()), name='book-update'),
    # path('reviews/<int:review_id>/delete/', csrf_exempt(BookReviewDelete.as_view()), name='book-delete'),
    # path('review/<int:review_id>/userDetail', csrf_exempt(BookReviewByUser.as_view()), name='review-user-get'),
    # path('user/<int:user_id>/reviews', csrf_exempt(UserReviews.as_view()), name='get-reviews-of-user'),
    # path('book/<int:book_id>/authors', csrf_exempt(BookAuthors.as_view()), name='get-authors-of-book'),
    # path('author/<int:author_id>/books', csrf_exempt(AuthorBooks.as_view()), name='get-books-of-author'),
]
