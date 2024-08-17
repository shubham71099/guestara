# Guestara Menu Management Assignment

This project is a Node.js backend server for managing a menu system that includes categories, subcategories, and items. The server is built using Express.js and MongoDB.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/shubham71099/guestara.git
   cd guestara

2. **Install Dependencies**:
    ```bash
    npm install

3. **Set Up Environment Variables:**:
    ```bash
    MONGO_URI=mongodb://localhost:27017/guestara
    PORT=5000

4. **Run the Application:**:
    ```bash
    npm start



### Which Database Have You Chosen and Why?
I chose MongoDB for this project due to its flexibility in handling hierarchical data structures such as categories, subcategories, and items. MongoDB's document-based approach makes it easier to model these relationships efficiently.

### 3 Things I Learned From This Assignment
- CRUD Operations with RESTful APIs: Implementing Create, Read, Update, and Delete operations effectively using Express.js.
- Middleware in Express.js: Learned how to use middleware for handling JSON data, routing, and other request processing tasks.

### What Was the Most Difficult Part of the Assignment?
The most challenging part was structuring and managing the relationships between categories, subcategories, and items in MongoDB. 

### What Would You Have Done Differently Given More Time?
I would have implemented authentication to secure the API endpoints and implementing more comprehensive error handling.



