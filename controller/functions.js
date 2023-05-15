import { Lead} from "../models/Lead.js"


//Homepage
function homepage (request, response){
    response.render("onboardHomepage.ejs")
}

//Generate a Lead
async function generateLead(request, response){
    let data = request.body
    await Lead.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobile: data.mobile,
        textBox: data.textBox
    })
    .then (()=>response.redirect("/"))
}


export {homepage, generateLead}