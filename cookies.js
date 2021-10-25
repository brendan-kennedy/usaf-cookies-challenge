const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express() 
app.use(cookieParser())
app.use(express.json())

app.use(cors({origin: 'http://localhost:3000', credentials: true}))

app.post('')

app.get('/login',(request,response) => { 
    
    username
    response.cookie('username','')
    console.log(cookies)
})


app.get('/hello',(request, response) => {
    response.cookie('username', username)
})


const port = 5000;
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}.`);
});