import mongoose from 'mongoose';

const collegeSchema = mongoose.Schema({
    Id: Number,
    Name: String,
    Year_founded: Number,
    City: String,
    State: String,
    Country: String,
    No_of_students: Number,
    Courses: String,
});

const College = mongoose.model('colleges', collegeSchema);

export default College;

