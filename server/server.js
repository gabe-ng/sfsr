const express = require("express");
const app = express();
let cors = require("cors");

app.use(express.json());

app.use(cors());

let controllers = require("./controllers");

// Safe Users
app.get("/api/safeusers", controllers.safeUser.getSafeUsers);
app.post("/api/usercreate", controllers.safeUser.createSafeUser);

// Safe Spaces
app.get("/api/safespaces", controllers.safeSpace.getSafeSpace); 


// Server
let port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})