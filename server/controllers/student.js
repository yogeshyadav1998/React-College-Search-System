import StudentDetail from '../models/student.js';

export const getStudent = async (req, res) => {
    try{
        const studentdetails = await StudentDetail.find();

        res.status(200).json(studentdetails);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}