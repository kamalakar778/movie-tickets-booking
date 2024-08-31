FrontEnd

UI Pages Needed

Landing Page: Displays available movies, user login/signup prompts, and movie filters.

Sign Up/Sign In Page: Allows new users to create an account or existing users to sign in.

Movie Details Page: Shows detailed information about a movie when a user selects one from the landing page.

Seat Selection Page: Displays a layout of the theater for a particular movie screening, allowing users to select and book seats.

Booking Summary Page: Shows the user's ticket and seat information, along with payment details and confirmation status.

User Profile Page: Displays user information and booking history.

Functionality

User Authentication:
This feature allows users to create a new account or sign in to an existing one. The sign-up process will require the user's basic details such as name, email, and password. After signing up, users will be able to sign in using their email and password.
In addition, it would be beneficial to provide a "Forgot password" option for users who might need help accessing their accounts. Two-factor authentication could also be incorporated for added security.

Movie Display:
This feature will showcase all the available movies. Each movie displayed will include basic information such as the title, director, starring actors, runtime, genre, language, and rating. Clicking on a movie will redirect users to a detailed Movie Details Page.

Movie Filtering:
This feature allows users to narrow down the list of displayed movies based on certain criteria such as genre (comedy, horror, action, etc.), language (English, Spanish, German, etc.), location (locality of the theater), and rating (PG, PG-13, R, etc.).
Users should be able to apply multiple filters at once. Filters should be easily cleared or adjusted, promoting a user-friendly interface.

Ticket Booking:
Users will be able to book movie tickets through the app. After selecting a movie, users will be able to choose the date and time of the screening, the number of tickets they want to book, and the specific seats.
The process should be seamless and guide users from one step to the next logically. Post booking, users will receive a confirmation of their booking through the app and via email.

Seat Selection:
This feature will provide users with a visual representation of the theater's seating arrangement for each screening. Available and unavailable seats will be clearly distinguishable, and users will be able to select the number of seats and their exact location.
Seats could be categorized by types (Regular, Premium, etc.), and pricing would reflect these categories. Once the seats are selected, they will be marked as unavailable for other users.

Booking Summary:
After the booking is complete, users will be directed to a summary page displaying all the details of their booking. This includes the movie title, screening time and date, the number of tickets, seat numbers, the total cost, and a confirmation status.
From this page, users should be able to download or send the summary to their email. They should also be able to access their past booking summaries from their user profile.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
