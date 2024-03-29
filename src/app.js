const express =  require('express');
const app =  express();
const hbs = require('hbs')
const path = require("path");
const port  = process.env.port||3000;

//Public static path 
const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path);

app.use(express.static(static_path)) //To use the static page

app.get("", (req,res)=>{

    res.render('index');
})

app.get("/about", (req,res)=>{

    res.render('about');
})

app.get("/Weather", (req,res)=>{

    res.render("weather");
})
app.get("*", (req,res)=>{

    res.render('404errorpage' ,{
        errorMsg: 'oops!! Page not found'
    });
})

app.listen(port,()=>{
    console.log(`${port} is working`)
});