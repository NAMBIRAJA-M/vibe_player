import express from 'express';
import bodyParser from "body-parser";
import passport from "passport";
import { Strategy as SpotifyStrategy } from 'passport-spotify';
import cors from 'cors';
import env from 'dotenv';
import session from "express-session";

const app=express();
const port=4000;
env.config();

app.use(
   session({
     secret: process.env.SESSION_SECRET,
     resave: false,
     saveUninitialized: true,
   })
 );
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

/* local authentication */
app.post("/login",(req,res)=>{
  const { email, password } = req.body; 
  /* console.log('Username:', email);
  console.log('Password:', password); */

});

app.post("/signup",(req,res)=>{
   // Destructure the request body
   const { email, password, fName, confirmPassword } = req.body;

   // Log the extracted values
   console.log('Email:', email);
   console.log('Password:', password);
   console.log('Name:', fName);
   console.log('Confirm Password:', confirmPassword);
});

/* SPOTIFY AUTHENTICATION */

app.get('/auth/spotify/signup',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    state: 'signup' ,
    showDialog: true
  })
);

 app.get('/auth/spotify/login',
   passport.authenticate('spotify', {
     scope: ['user-read-email', 'user-read-private'],
     state: 'login'
   })
 );
 app.get('/auth/spotify/callback', 
  passport.authenticate('spotify', { failureRedirect: '/' }),
  (req, res) => {
    if (req.query.state === 'signup') {
      console.log('User signed up:', req.user);
      res.redirect('http://localhost:3000/');
    } else {
      console.log('User logged in:', req.user);
      res.redirect('http://localhost:3000/');
  }
}
);
       

 app.get("/user", (req, res) => {
   console.log("from the /user route");
   if (req.isAuthenticated()) {
     console.log("yes authenticated")
     res.json(req.user)
   } else {
    console.log("not yet")
   }
 });

 app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        console.log('Error destroying session:', err);
      }
      res.clearCookie('connect.sid');
      res.redirect('http://localhost:3000/'); 
    });
  });
});


 passport.use(
   "spotify",
   new SpotifyStrategy(
     {
       clientID:process.env.SPOTIFY_CLIENT_ID,
       clientSecret:process.env.SPOTIFY_CLIENT_SECRET,
       callbackURL: 'http://localhost:4000/auth/spotify/callback'
     },
   (accessToken, refreshToken, profile, done) => {
   
         return done(null, profile);
 }));
 
 passport.serializeUser((user, done) => {
   done(null, user);
 });
 
 passport.deserializeUser((obj, done) => {
   done(null, obj); 
 });

 app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
 })