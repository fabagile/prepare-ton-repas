import mongoose from 'mongoose'

const url =  "mongodb+srv://fabagile:Marajade1@angular.alnwzpc.mongodb.net/?retryWrites=true&w=majority"
export const connectDB = ()=>  {const connection = mongoose.connect(url)
    console.log("connected")
return connection}