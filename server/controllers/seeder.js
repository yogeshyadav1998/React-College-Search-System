import mongoose from 'mongoose';
import faker from 'faker';

mongoose.connect('mongodb+srv://YogeshYadav:Yogesh@1998@cluster0.23vqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

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

const studentSchema = mongoose.Schema({
    Id: Number,
    Name: String,
    Year_of_batch: Number,
    College_Id: Number,
    Skills: String
});

const College = mongoose.model('colleges',collegeSchema);
const Student = mongoose.model('students',studentSchema);

for(let i=0;i<100;i++){
    const college = new College({
        Id : faker.random.number(),
        Name : faker.name.findName(),
        Year_founded : faker.random.number({'min': 1950,'max': 2000}),
        City : faker.address.city(),
        State : faker.address.state(),
        Country : faker.address.country(),
        No_of_student : faker.random.number({'min': 50,'max': 100}),
        Courses : faker.name.findName(),
    })

    college.save()
    .then(collegeRef =>{
        console.log(collegeRef.Name);
        for(let j=0;j<100;j++){
            const student = new Student({
                Id : faker.random.number(),
                Name : faker.name.findName(),
                Year_of_batch : faker.random.number({'min': 1950,'max': 2020}),
                College_Id : collegeRef.Id,
                skills : faker.name.findName()
            })

            student.save().then(_=>_)
        }
    })
}
