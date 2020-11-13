const mongoose = require('mongoose')

//connect to cluster
mongoose.connect('mongodb+srv://mongodb:dhanashri@cluster0.qdytt.mongodb.net/Program?retryWrites=true&w=majority', 
{
    //for some verion this os depricated.....to avoid deprecation problem
    useNewUrlParser :true,
    useUnifiedTopology : true,
    useFindAndModify : false 
})
.then(ok => console.log("connected to mongodb"))
.catch(err => console.log("mongodb connection error",err))

module.exports = mongoose