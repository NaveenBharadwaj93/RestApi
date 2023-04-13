const ideas = require("../Model/ideas.model");


// perform crud operation on model data available

// Search all the ideas
// Read all the ideas data

exports.fetchAllIdeas = (req , res) => {
    res.status(200).send(ideas);
}

/* create a idea */
let idCount = 1
exports.createIdea = (req,res) => {
    // read request body
    const idea = req.body;
    //need to generate the next idea id and add to json request
    idea.id = ++idCount
    //save it in the list of existing ideas
    ideas[idCount] = idea
    //return the response
    res.status(201).send(ideas[idCount]);
}

// Update the ideas
exports.UpdateIdea = (req,res) => {
    //i need to read id from the path
    const readId = req.params.id;
    // if idea is present then update
    if(ideas[readId]){
        
        ideas[readId] = req.body;
        res.status(200).send(ideas[readId])
    }else{
        res.status(400).send({
            message:'not a valid id'
        })
        console.log("not a valid id");
    }
}

// delete an idea
exports.DeleteIDea = (req,res) => {
    //i need to read id from the path
    const readId = req.params.id;
    // if idea is present then delete
        if(ideas[readId]){
            delete ideas[readId];
            res.status(200).send({
                message : 'successfully deleted'})
        }else{
        res.status(400).send({
            message:'not a valid id'
        })
        console.log("not a valid id");
        }

}