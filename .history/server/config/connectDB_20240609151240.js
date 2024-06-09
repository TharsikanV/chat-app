const mongoose=require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.M)
    } catch (error) {
        
    }
}