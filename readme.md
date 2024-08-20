# DiginalMarket API

MarketLink API es una API RESTful construida con Node.js, Express y MongoDB para gestionar usuarios, productos, pedidos, reseñas, categorías, marcas, almacenes, proveedores y envíos en una plataforma basica de comercio electrónico.

## Características

- Autenticación y autorización con JWT.
- CRUD para productos, categorías, marcas y más.
- Gestión de pedidos y envíos.
- Reseñas y calificaciones de productos.
- Notificaciones por correo usando SendGrid.

## Requisitos

- Node.js (v14+)
- MongoDB (local o Atlas)
- Cuenta de SendGrid para correos


## Configuración

1. Crea un archivo `.env` basado en `.env.example` y agrega tus variables de entorno:
    ``
    PORT=
    JWT_SECRET=
    MONGO_URI=mongodb+srv:
    SENDGRID_API_KEY=
    EMAIL_FROM=
    ```
## Licencia

Este proyecto está bajo la licencia MIT.