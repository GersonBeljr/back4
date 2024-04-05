const express = require('express');
const server = express()

//rotas
server.get('/',(req,res)=>{
    res.send('<h1>OI</h1>')
})

server.get('/gif',(req,res)=>{
    res.send('<img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/02/nyan-cat.gif"></img>')
})

server.get('/g',(req,res)=>{
    res.send('<h1>G</h1>')
})

server.get('/e',(req,res)=>{
    res.send('<h1>E</h1>')
})
server.get('/r',(req,res)=>{
    res.send('<h1>R</h1>')
})

server.get('/s',(req,res)=>{
    res.send('<h1>S</h1>')
})

server.get('/o',(req,res)=>{
    res.send('<h1>O</h1>')
})

server.get('/n',(req,res)=>{
    res.send('<h1>N</h1>')
})

server.use((req,res)=>{
    //res.send('Corre deu ruim')
    res.status(404).send('Corre deu ruim')
})

server.listen(3000);

