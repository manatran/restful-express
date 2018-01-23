var mongoose = require('mongoose');

//Project Schema
var projectSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    create_date:{
        type:Date,
        default: Date.now
    }

});

var Project = module.export = mongoose.model('Project', projectSchema);

//Get Projects
module.exports.getProjects = function (callback, limit) {
    Project.find(callback).limit(limit);
};

//Get Projects by Id
module.exports.getProjectsById = function (id,  callback) {
    Project.findById(id, callback);
};

//Add Project
module.exports.addProject = function (project, callback) {
    Project.create(project, callback);
};

//Edit Project
module.exports.updateProject = function (id, project, options, callback) {
    var query = {_id: id};
    var update = {
        title: project.title,
        description: project.description,
        members: project.members
    };
    Project.findOneAndUpdate(query, update, options, callback);
};

//Delete Project
module.exports.deleteProject = function (id, callback) {
    var query = {_id: id};
    Project.remove(query, callback);
};