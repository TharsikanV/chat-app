const mongoose=require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        const connecion=mongoose
    } catch (error) {
        console.log("Something is wrong",error)
    }
}