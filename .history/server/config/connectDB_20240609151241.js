const mongoose=require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.MO)
    } catch (error) {
        
    }
}