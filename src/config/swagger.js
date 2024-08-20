// import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'API Documentation',
//       version: '1.0.0',
//     },
//   },
//   apis: ['./src/routes/*.js'],
// };

// const swaggerSpec = swaggerJsdoc(options);

// const swaggerDocs = (app) => {
//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };

// export default swaggerDocs;

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger-output.json' assert { type: 'json' }; // Ajusta la ruta

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default swaggerDocs;