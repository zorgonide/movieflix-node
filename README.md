# MovieFlix API

This API provides endpoints to manage movie ratings, comments, and watchlists. It allows users to rate movies, leave comments, and add movies to their watchlists.

## Installation

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`

## Prerequisites

- Node.js
- PostgreSQL or any other supported database (configured in the Prisma schema).
- There should be a `.env` file in project root folder, with `DATABASE_URL` and `JWT_SECRET` defined. I used [render](https://render.com/) to set up a free postgreSQL db.

## Configuration

1. Copy the `.env.example` file and rename it to `.env`.
2. Update the `.env` file with your database connection details and other environment variables.

## Database Setup

1. Run database migrations: `npx prisma migrate dev`

## Usage

Start the server: `npm run dev`

The server will be running on `http://localhost:3000`.

## Endpoints

### User

- `POST /signin`: Sign in to the application.
- `POST /user`: Create a new user.
- `PUT /user`: Update user information.
- `GET /user`: Get user details.

### Movie

- `POST /movie/:id`: Add a new movie.
- `GET /movie/:id`: Get movie details.

### Comment

- `GET /comment/:movieId`: Get comments for a movie.
- `POST /comment`: Create a new comment.
- `PUT /comment`: Update a comment.
- `DELETE /comment/:id`: Delete a comment.

### Rating

- `GET /rating/:movieId`: Get ratings for a movie.
- `PUT /rating`: Update a rating.
- `POST /rating/:movieId`: Create a new rating.

### Watchlist

- `GET /watchlist`: Get the user's watchlist.
- `DELETE /watchlist/:movieId`: Remove a movie from the watchlist.
- `POST /watchlist/:movieId`: Add a movie to the watchlist.

## Error Handling

If any error occurs during the API request handling, a 500 status code will be returned along with an error message in the response body.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the API, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Prisma](https://www.prisma.io/): Used as the database ORM.
- [Express](https://expressjs.com/): Used as the web framework.
- [Validator.js](https://validatorjs.com/): Used for request validation.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Used for password hashing.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Used for authentication and authorization.
- [dotenv](https://www.npmjs.com/package/dotenv): Used for environment variable management.

Feel free to modify the readme file to suit your specific requirements and add any additional information or instructions that might be relevant to your project.