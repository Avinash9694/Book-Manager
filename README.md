# Book Manager API

The Book Manager API is a RESTful API for managing books. It provides basic CRUD (Create, Read, Update, Delete) operations for books. You can use this API to add new books, view a list of all books, view details of a specific book by its ID, update a book's details, and delete a book.

## API Endpoints and Their Usage

1. **Create a New Book**

   - **Endpoint**: POST /api/v1/books
   - **Description**: Create a new book by providing the book's title, author, and summary.
   - **Request Body**:
     ```
     {
       "title": "Harry Potter",
       "author": "J.K.Rowling",
       "summary": "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley."
     }
     ```
   - **Response**:
     - 201 Created: New book saved Successfully.
     - 200 OK: The book already exists.
     - 400 Bad Request: Validation errors.

2. **Get a List of All Books**

   - **Endpoint**: GET /api/v1/books
   - **Description**: Retrieve a list of all books in the database.
   - **Response**:
     - 200 OK: Returns a list of books.
     - 400 Bad Request: Failed to retrieve books.

3. **Get Details of a Specific Book by Its ID**

   - **Endpoint**: GET /api/v1/books/:bookId
   - **Description**: Retrieve details of a specific book by its ID.
   - **Response**:
     - 200 OK: Returns the book's details.
     - 400 Bad Request: The book ID was not found.

4. **Update a Book's Details**

   - **Endpoint**: PUT /api/v1/books/:bookId
   - **Description**: Update a book's details by providing the book's ID and the fields to be updated.
   - **Request Body**:
     ```
     {
       "title": "Updated Title",
       "author": "Updated Author",
       "summary": "Updated Summary"
     }
     ```
   - **Response**:
     - 200 OK: Returns the updated book.
     - 400 Bad Request: Validation errors.

5. **Delete a Book**
   - **Endpoint**: DELETE /api/v1/books/:bookId
   - **Description**: Delete a book by its ID.
   - **Response**:
     - 200 OK: The book was successfully deleted.
     - 400 Bad Request: Failed to delete the book.

## Instructions to Set Up and Run the Application Locally

To run the Book Manager API locally, follow these steps:

1. Clone the repository from GitHub:

   ```
   git clone https://github.com/Avinash9694/Book-Manager.git
   ```

2. Navigate to the project directory:

   ```
   cd .\Book-Manager\src
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the project root directory and define your MongoDB connection string. For example:

   ```
   MONGO_URL=mongodb://localhost:27017/book-manager
   ```

5. Start the application:

   ```
   npm start
   ```

6. The API will be available at [http://localhost:8080/api/v1/](http://localhost:8080/api/v1/).

7. You can test the API endpoints using a tool like Postman.

## Notes

- This API uses MongoDB as the database. Ensure that MongoDB is running and accessible from your local environment.
- Please handle and secure your environment variables and database credentials carefully, especially in a production environment.

Feel free to explore the API, use it in your applications, or extend its functionality as needed.
