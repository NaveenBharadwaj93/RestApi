const ideasController = require("../Controllers/ideas.controller");

// get call
module.exports = (app) => {
    app.get("/naveenread/read",ideasController.fetchAllIdeas)

    app.post("/naveenCreate",ideasController.createIdea)

    app.put("/naveenUpdate/:id",ideasController.UpdateIdea)

    app.delete("/naveenDelete/:id",ideasController.DeleteIDea)
}

// put call
// post call
/*module.exports = (app) => {
    app.post("/naveenCreate",ideasController.createIdea)
}*/
// delete call