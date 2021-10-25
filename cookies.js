const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express() 
app.use(cookieParser())
app.use(express.json())

app.use(cors({origin: 'http://localhost:3000', credentials: true}))



app.post('/login',(request,response) => { 
    var opts = {
        maxAge: 90000000000
    }
    let newUser = request.body
    if( 
        newUser.name
    ){
    response.cookie('username',newUser.name,opts)
    }
    response.redirect('/hello')
})


app.get('/hello',(request, response) => {
    response.json(`Welcome ${newUser.name}!`)
})


const port = 3000;
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}.`);
});