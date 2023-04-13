const express = require("express");

const app = express();
app.use(express.json());
app.use(myMiddleware)


function myMiddleware(req,res,next) {
    console.log("i'm inside middleware");
    next();
}
require("./Routes/ideas.route")(app);
app.listen(8000,()=>{
    console.log("server started");
})