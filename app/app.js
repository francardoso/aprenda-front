const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const app = express();
const mongoose = require('mongoose');
const settings = require('../settings');

app.set('views', settings.TEMPLATES_PATH); // specify the views directory
app.set('view engine', 'pug');
app.use(express.static(settings.STATIC_FILES_PATH)); // sets the folder that servers the static files
mongoose.connect(settings.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true});
app.set('trust proxy', 1);
app.use(session({
    secret: settings.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {secure:false}, // MAYBE WILL HAVE TO CHANGE ON PRODUCTION
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));
//////////////////////// REACT ROUTING ///////////////////////////////////////////////
app.get('/professor/*', 
    professorMiddleware, 
    (req, res) => res.render('default', { scripts: ['/javascripts/professor-build.js']}));
app.get('*',
    (req, res) => res.render('default', { scripts: ['/javascripts/student-build.js']}));

// routes debbug 
app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});     
app.listen(settings.PORT, () => console.log(`Server Listening on port ${settings.PORT}`));


function professorMiddleware(req, res, next){
    // test if has role to acess professor page, other wise, redirects do student page 
    if(req.session && req.session.APRENDA && req.session.APRENDA.role === 'professor'){
        next();
    }else{
        res.render('default', { scripts: ['/javascripts/student-build.js']});
    }            
}