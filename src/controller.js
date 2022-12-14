const {Task} = require("./models");


const getAllTasks = async (request,response)=>{
   var _id=request.query.id;
   if(_id){
    var allTasks= await Task.findById();

   }
   else{
    var allTasks= await Task.find();
   }
   return response.json(allTasks);
    // var allstudents= await Student.find(); //to fetch all data
    // return response.json(allstudents);
};
const createTask= async (request,response)=>{
    console.log(request.body);
    await Task.create(request.body);
    return response.json({status:"Task Created"});
}
const updateTask= async (request,response)=>{
    var _id=request.query.id;
    var data = request.body;
    await Task.findByIdAndUpdate(_id,data);
    return response.json({status:"Task updated"});
}
const deleteTask= async (request,response)=>{
    var _id=request.query.id;
    var data = request.body;
    await Task.findByIdAndDelete(_id,data);
    return response.json({status:"Task deleted"});
}
const patchTask= async (request,response)=>{
    var _id=request.query.id;
    var data = request.body;
    await Task.findByIdAndUpdate(_id,data);
    return response.json({status:"Task patched"});
}


module.exports ={
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    patchTask,
};