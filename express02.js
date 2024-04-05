//abrir arquivos de html

const express = require('express');
const server2 = express()

server2.listen(3000);

//definindo rotas
/*
G
E
R
S
O
N
404
*/

//escrevendo servidor

server2.get('/g',(req,res)=>{
    res.sendFile('/pags/g.html',{root:__dirname})
})

server2.get('/e',(req,res)=>{
    res.sendFile('/pags/e.html',{root:__dirname})
})

server2.get('/r',(req,res)=>{
    res.sendFile('/pags/r.html',{root:__dirname})
})

server2.get('/s',(req,res)=>{
    res.sendFile('/pags/s.html',{root:__dirname})
})

server2.get('/o',(req,res)=>{
    res.sendFile('/pags/o.html',{root:__dirname})
})

server2.get('/n',(req,res)=>{
    res.sendFile('/pags/n.html',{root:__dirname})
})

//exemplo de redirecionamento
server2.get('/ENE',(req,res)=>{
    res.redirect('/n')
})

server2.use((req,res)=>{
    res.status(404).sendFile('/pags/404.html',{root:__dirname})
})