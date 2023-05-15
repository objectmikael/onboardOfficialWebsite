import express from "express"
import {router as routesRouter} from "./routes/routes.js"
import path from "path"
import { fileURLToPath } from "url"
import connectToDatabase from "./config/database.js"
import {config} from "dotenv"


/*----- ACCESS TO ENV VARIABLES -----*/
const dotenvPath = path.resolve(process.cwd(), '.env');
config({ path: dotenvPath });


/*----- INITIALIZE APP -----*/
const app = express()


/*----- DATABASE CONNECTION -----*/
connectToDatabase()



/*----- CONFIGURATION -----*/
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')))


/*----- MIDDLEWARE -----*/
app.use(express.json()) 
app.use(express.urlencoded({extended: false})) 

/*----- ROUTER -----*/
app.use("/", routesRouter)



/*----- PORT DEFINITION -----*/
const PORT = process.env.PORT || 3100
app.listen(PORT, function (){
    console.log(`App listening on port ${PORT}`)
})