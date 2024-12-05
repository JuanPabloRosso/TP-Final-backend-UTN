import mongoose from "mongoose";

process.loadEnvFile()
const URI_DB = process.env.URI_DB

const connectDb = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log("Conexion exitosa a la base de datos");
    } catch (error) {
        console.log("conexion fallida a la base de datos");
    }
}
 export {connectDb}