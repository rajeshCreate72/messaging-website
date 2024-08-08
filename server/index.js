const express = require("express");
const connectDatabase = require("./DatabaseConnection.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Connection to database
connectDatabase();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "https://chat-website-virid.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors()); // Pre-flight requests for all routes

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
      <html>
        <title>Server</title>
        <h1>Hello messaging webisite</h1>
      </html>
    `);
});

// Connection to routes
app.use("/api/login", require("./UsersCollection/UsersLogin.js"));
app.use("/api/register", require("./UsersCollection/UsersRegister.js"));
app.use("/api/contacts", require("./ContactsCollection/Contacts.js"));
app.use("/api/chats", require("./ChatsCollection/Chats.js"));
app.use("/api/users", require("./UsersCollection/UsersRegister.js"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT} `);
});
