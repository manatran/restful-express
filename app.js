var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Student = require('./models/students');
Project = require('./models/projects');

var app = express();

app.use(bodyParser.json());

//Connect to Mongoose
mongoose.connect('mongodb://localhost/restful');
var db = mongoose.connection;

//Router
app.get('/', function(req, res){
    res.send('Please use /api/students or /api/projects');
});


//Get Students
app.get('/api/students', function (req, res) {
    Student.getStudents(function (error, students) {
        if(error){
            throw error;
        }else{
            res.json(students);
        }

    });
});
//Add Student
app.post('/api/students', function (req, res) {
    var student = req.body;
    Student.addStudent(student, function (error, student) {
        if(error){
            throw error;
        }else{
            res.json(student);
        }

    });
});
//Update Student
app.put('/api/students/:_id', function (req, res) {
    var id = req.params._id;
    var student = req.body;
    Student.updateStudent(id, student, {}, function (error, student) {
        if(error){
            throw error;
        }else{
            res.json(student);
        }

    });
});
//Remove Student
app.delete('/api/students/:_id', function (req, res) {
    var id = req.params._id;
    Student.deleteStudent(id, function (error, student) {
        if(error){
            throw error;
        }else{
            res.json(student);
        }

    });
});

//get Projects
app.get('/api/projects', function (req, res) {
    Project.getProjects(function (error, projects) {
        if(error){
            throw error;
        }else{
            res.json(projects);
        }

    });
});
//get Projects By Id
app.get('/api/projects/:_id', function (req, res) {
    Project.getProjectsById(req.params._id, function (error, project) {
        if(error){
            throw error;
        }else{
            res.json(project);
        }

    });
});
//Add Project
app.post('/api/projects', function (req, res) {
    var project = req.body;
    Project.addProject(project, function (error, project) {
        if(error){
            throw error;
        }else{
            res.json(project);
        }

    });
});
//Update Project
app.put('/api/projects/:_id', function (req, res) {
    var id = req.params._id;
    var project = req.body;
    Project.updateProject(id, project, {}, function (error, project) {
        if(error){
            throw error;
        }else{
            res.json(project);
        }

    });
});
//Remove Project
app.delete('/api/projects/:_id', function (req, res) {
    var id = req.params._id;
    Project.deleteProject(id, function (error, project) {
        if(error){
            throw error;
        }else{
            res.json(project);
        }

    });
});


//Start server
app.listen(3000);
console.log('Running on port 3000...');