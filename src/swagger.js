const swaggerAutogen = require("swagger-autogen")({ openapi: '3.0.0' });

const doc = {
  info: {
    version: "1.0",
    title: "Url Shortner Api Rest",
    description: "API REST to shorten URLs",
  },
  servers: [
    { url: 'http://localhost:3001', description: "LocalTest" },
    { url: 'https://url-shortener-iaaz.onrender.com/', description: "LocalProd" },
  ],
  consumes: ["application/json", "multipart/form-data"],
  produces: ["application/json"],
  tags: [
    { name: "auth", description: "Endpoints of auth" },
    { name: "url", description: "Endpoint of url" }
  ],
  components: {
    securitySchemes: {
      Bearer: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: `Enter the token with the 'Bearer ' prefix, e.g. "Bearer abcde12345".`,
      },
    },
  },
  security: [
    {
      Bearer: [],
    },
  ],
  definitions: {},
};

const outputFile = "src/swagger.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
