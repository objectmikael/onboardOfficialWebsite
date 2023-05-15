import express from "express"
import { homepage, generateLead } from "../controller/functions.js"

const router = express.Router()

//---------------------------------------------------------------------------
//Homepage
router.get("/", (request, response) => response.redirect("/onboardHome"))
router.get("/onboardHome", homepage)

//---------------------------------------------------------------------------
//Lead
router.post("/generateLead", generateLead)

//---------------------------------------------------------------------------
//Testing

// router.get("/api", api)


export {router}