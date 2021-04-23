const mongoose = require("mongoose");
const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://YogeshYadav:Yogesh@1998@cluster0.23vqe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		);
		console.log("Database connected");
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};
module.exports = connectDB;
