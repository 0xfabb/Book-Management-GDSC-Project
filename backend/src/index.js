// Okay, so i am leaving these comments here... The entire repo is filled with comments, because this CodeBase might end up having a lot of uncommon varibale names coz developers are dumb and so am i and i don't have time to come up with a very good name for each variale and even routes, so i might have named these routes in a very weird way, but trust me you'll understand everything, also i have such comments everywhere in the codebase to help you figure why something is used and what purpose it serves...
// Cheers :)

// I am using express as the main library for this, would've possibly used HONO if i were to deploy the project.
// I am using the type of javascript as module coz i am more comfortable working with the import-export syntax.
// Also i am dividing this projects into multiple folders to make the codebase more clean and readable.
// I am not pushing the env file because i really don't want to share my MONGO URI with anyone, trust me ;) however the env example shows the str of the env i used... 

import express from "express";
import { connectToMongoDB } from "./config/db.js";
import bookRoute from "./routes/BookRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
connectToMongoDB(); // Defined the connection logic in db.js file in the config folder.

app.get("/", (req, res) => res.json("This is Homepage"));
app.use("/api", bookRoute);

const Port = 3002; // Defined the port right away and in the env as well... 

app.listen(Port, () => {
  console.log(`Server is listening on Port ${Port}`);
});



// Read this after going through the entire codebase and all the comments first - 
// Okay, biee, Thanks... 