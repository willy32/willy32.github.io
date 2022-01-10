const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router  = express.Router();
const User = require('./schema');
const VerifyToken = require('./auth');
let user;

router.use('/', (req, res, next) => {
    next();
})

router.get('/', (req, res) => {
    const {token} = req.cookies;
    console.log(token);
    if(VerifyToken(token)){
        res.render('home', {
            user: user
        });
    }else{
        res.render('index');
    }
});
router.get('/home', (req, res) => {
    const {token} = req.cookies;
    console.log(token);
    if(VerifyToken(token)){
        res.render('home', {
            user: user
        });
    }else{
        res.render('index');
    }
});
router.get('/signup', (req, res) => {
    res.render('register');
});


router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    let {txtEmail, txtPassword} = req.body;
    user = await User.findOne({email: txtEmail});
    const comparedPassword = bcrypt.compareSync(txtPassword, user.password);
    if(comparedPassword){
        let token = jwt.sign({id: user._id}, process.env.JWT, {expiresIn: '60sec'});
        console.log(token);
        res.cookie('token', token, {maxAge : 60000, httpOnly: true});
    }else{
        res.status(401).json({message: "Failed"});
    }
    res.redirect('/');

});

router.post('/signup', (req, res) => {
    let {txtfName, txtlName, txtEmail, txtID, txtPassword, txtPasswordRepeat} = req.body;
    let error = [];
    if(!(txtfName, txtlName, txtEmail, txtID, txtPassword, txtPasswordRepeat)){
        error.push({message: "Fill out all the fields"});
    }
    if(txtPassword !== txtPasswordRepeat){
        error.push({message: "Passwords are not the same"});
    }
    if(error.length > 0){
        res.render('register', {
            error: error
        });
    }

    const hashedPassword = bcrypt.hashSync(txtPassword, 10);

    console.log(hashedPassword);

    const info = new User({
        firstName: txtfName,
        lastName: txtlName,
        email: txtEmail,
        id: txtID,
        password: hashedPassword
    });
    info.save((err)=>{
        if(err) throw err;
        else console.log("Saved to MongoDB");
    });

    res.redirect('/login');
    res.end();
});


module.exports = router;