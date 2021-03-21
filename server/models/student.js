import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    Id: Number,
    Name: String,
    Year_of_batch: Number,
    College_Id: Number,
    Skills: [String]
});

const Student = mongoose.model('students',studentSchema);

export default Student;