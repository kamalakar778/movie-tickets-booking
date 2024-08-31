import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SeatSelection from "./pages/SeatSelection";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import TicketsPage from "./pages/Tickets";
import MovieDetails from "./pages/MovieDetails";
import MovieCard from "./pages/MovieCard";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <>
        <Routes>
          {/* Displays available movies, user login/signup prompts, and movie filters. */}
          {/* <Route path="/" element={<Home />} /> */}

          {/* Allows new users to create an account or existing users to sign in. */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/* Shows detailed information about a movie when a user selects one from the landing page. */}
          {/* <Route path="/movies-list" element={<MovieCard />} /> */}

          {/* <Route exact path="https://freetestapi.com/api/v1/movies/id" element={<MovieDetails />} /> */}
          <Route path="/movie/:id" element={<MovieDetails />} />

          {/* Displays a layout of the theater for a particular movie screening, allowing users to select and book seats. */}
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/seats" element={<SeatSelection />} />

          {/* Shows the user's ticket and seat information, along with payment details and confirmation status. */}
          {/* <Route path="/booking-summary" element={<BookingSummary />} /> */}

          {/* Displays user information and booking history. */}
          {/* <Route path="/user-profile" element={<UserProfile />} /> */}

          {/* Catch-all route for undefined paths */}
          {/* <Route path="*" element={<Notfound />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
