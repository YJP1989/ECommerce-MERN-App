const app = require("./app");
const connectDatabase = require("./db");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({

    path: "backend/.env",
  });
};
console.log('jwt service',this.jwtService)
connectDatabase();

// create server
const server = app.listen(process.env.PORT||3003, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});


// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});