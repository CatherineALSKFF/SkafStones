const express= require('express');
const bodyParser= require('body-parser');
const engine= require('ejs-mate')
const path= require('path');
const Prod= require('./models/prods');
const Contact= require('./models/contacts');
const dotenv= require('dotenv').config()
const session = require('express-session');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet')
 const MongoStore = require('connect-mongo');


const mongoose= require('mongoose');


const app = express();
app.engine('ejs', engine);
app.set('views', path.join(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
mongoose.set('strictQuery', false);
app.use(mongoSanitize({
    replaceWith: '_',
}));
const dbUrl= process.env.DB_URL
//  || 'mongodb://127.0.0.1:27017/skaf-stones';

mongoose.connect(dbUrl);

const store= MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 3600 
})

store.on('error', (e)=>{
   console.log('session store error', e)
})

const secret= process.env.SECRET || 'donttellsecret'

const sessionConfig = {
 store: store,
   secret,
   resave: false,
   cookie: {
       httpOnly: true,
       expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
       maxAge: 1000 * 60 * 60 * 24 * 7
   }
}

app.use(session(sessionConfig));


  const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com/",
    "https://kit.fontawesome.com/",
    "https://cdnjs.cloudflare.com/",
    "https://cdn.jsdelivr.net",
    "https://www.w3schools.com/w3css/4/w3.css" ,
    "https://www.google.com",
    "https://www.instagram.com/"

];
const styleSrcUrls = [ 
    "https://kit-free.fontawesome.com/" ,
    "https://stackpath.bootstrapcdn.com/" ,
    "https://fonts.googleapis.com/" ,
    "https://use.fontawesome.com/" ,
    "https://www.w3schools.com/w3css/4/w3.css" ,
    "https://www.google.com",
    "https://cdn.jsdelivr.net" ,
    "https://www.instagram.com/"

];
const connectSrcUrls = [
    "https://www.instagram.com/"

];
const fontSrcUrls = [  "https://fonts.gstatic.com/"];
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            frameSrc: [
              "'self'",
              "https://www.google.com",
              "https://www.google.com/maps/embed",
              "https://www.instagram.com/"

            ],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            objectSrc: ["https://www.instagram.com/"],  
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://res.cloudinary.com/dcvwaxbeh/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT! 
                "https://images.unsplash.com/",
                'http://www.customstonehouse.com/',
                "https://www.instagram.com/"

            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
  );





// ADMIN'S ACCOUNT
app.get('/admin', async(req,res)=>{
    const contacts= await Contact.find({});
   res.render('admins/show', {contacts});
})

app.post('/admin', async(req,res)=>{
    const contacts= new Contact(req.body.contact);
    await contacts.save();
    res.redirect('/')
})

app.post('/', async (req, res) => {
    const newProd = new Prod(req.body.prod);
    await newProd.save();
    res.redirect('/')
})




// SHOW


app.get('/', async (req, res) => {
    const prods = await Prod.find({});
    res.render('users/landing', { prods })
});












app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})