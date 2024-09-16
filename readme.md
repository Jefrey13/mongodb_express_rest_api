# DigitalMarket API

**DigitalMarket API** is a RESTful API built with Node.js, Express, and MongoDB, providing a solution for managing a basic e-commerce platform. The API offers features for managing users, products, orders, reviews, categories, brands, warehouses, suppliers, and shipments.

## Key Features

- **Authentication and Authorization**: Uses JWT for secure authentication and role-based access control (administrator and standard user).
- **Full Product Management**: Supports creating, reading, updating, and deleting products, including inventory management, pricing, and categories.
- **Order and Shipment Management**: Facilitates creating and updating orders, along with tracking and managing shipments.
- **Product Reviews**: Users can leave reviews and ratings for products.
- **Supplier and Warehouse Management**: Manages suppliers and warehouses to maintain inventory control.
- **Email Notifications**: Automatically sends email notifications via SendGrid for order confirmations, shipping updates, and more.
- **Swagger Documentation**: Provides complete API documentation for easy integration with other applications.

## Requirements

- Node.js (v14+)
- MongoDB (local or Atlas)
- SendGrid account for sending email notifications

## General Structure

- **Authentication**: The API allows user registration and login, using JSON Web Tokens (JWT) to handle sessions and access permissions.
- **Products**: Implements CRUD (Create, Read, Update, Delete) operations for products, categories, and brands.
- **Users**: Manages user profiles with defined roles to control access to different functionalities.
- **Orders**: Users can create and manage orders, while administrators can monitor the status of these orders.
- **Shipments**: Provides functionality to manage the details and status of shipments linked to orders.
- **Reviews**: Authenticated users can leave comments and ratings for purchased products.
- **Warehouses and Suppliers**: The API manages warehouses and suppliers, allowing easy inventory updates and control.
- **Security and Rate Limiting**: The API includes protection against common attacks such as code injection and brute force, with request rate-limiting mechanisms.

## Documentation

The API is documented using **Swagger**, allowing users to explore all available endpoints, along with parameters, responses, and methods. You can access the interactive documentation once the API is running at `/api-docs`.

## Email Notifications

The API uses **SendGrid** to send transactional email notifications such as registration confirmations, order updates, and other user messages.

## Best Practices Implemented

- **Data Protection**: Input sanitization and protection against XSS and SQL Injection attacks.
- **Request Rate Limiting**: Limits requests per IP to prevent abuse.
- **Secure File Uploads**: Uploaded images (e.g., product photos) are securely processed and stored using Cloudinary.
- **Error Handling**: Centralized error handling to provide consistent responses for server errors or invalid requests.

## Deployment

The project can be easily deployed to platforms like **Heroku** or **Vercel**, using MongoDB Atlas for the database and SendGrid for email services.

## Contribution

This project is open to contributions. You can fork the repository, work on improvements, and submit a Pull Request for review.

## License

This project is licensed under the MIT License.
