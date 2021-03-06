var mongoose = require('mongoose');

//Student Schema
var studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    create_date:{
        type:Date,
        default: Date.now
    }

});

var Student = module.export = mongoose.model('Student', studentSchema);

//Get Students
module.exports.getStudents = function (callback, limit) {
    Student.find(callback).limit(limit);
};

//Get Students by Id
module.exports.getStudentsById = function (id,  callback) {
    Student.findById(id, callback);
};

//Add Student
module.exports.addStudent = function (student, callback) {
    Student.create(student, callback);
};

//Edit Student
module.exports.updateStudent = function (id, student, options, callback) {
    var query = {_id: id};
    var update = {
        name: student.name,
        first_name: student.first_name
    };
    Student.findOneAndUpdate(query, update, options, callback);
};

//Delete Student
module.exports.deleteStudent = function (id, callback) {
    var query = {_id: id};
    Student.remove(query, callback);
};