import CollegeDetail from '../models/college.js';

export const getCollege = async (req, res) => {
    try{
        const collegedetails = await CollegeDetail.find();

        res.status(200).json(collegedetails);
    }catch(error){
        res.status(404).json({message: error.message})
    }
}