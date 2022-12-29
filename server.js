import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get('/', (req,res) =>{
        res.send('Hola mundo');
})

app.get('/setcookie', (req,res) =>{
        res.cookie("my cookie", "a value", {
                maxAge: 1000 * 7,
                //expires: new Date("2022-12-31"),
                httpOnly: true,  //solo puede ser accedida con peticiones
                secure: true,   //solo puede ser leida si es con https
                sameSite: 'lax'
        });
        res.send('Hola');
})

app.get('/getcookie', (req,res) => {
        
        console.log(req.cookies);
        
        res.send('cookies');
})

app.get('deletecookie', (req,res) => {
        console.log(req.cookies);
        res.clearCookie('my cookie');
        res.send('no more cookie :(');
})


app.listen(3000);
console.log("Server on port 3000");

