import express from 'express';
import {createServer} from 'http';
import cors from 'cors';
import { Server } from 'socket.io';
// import {Socket} from 'socket.io-client'

const app=express();
const server=createServer(app);
const io=new Server(server,{

    cors:{
        origin:"http://localhost:5173",
        methods:['GET','POST'],

    }
      

});

  
    


//event set for socket io
io.on("connection",(socket)=>{
            console.log("new user connected!...");

            socket.on('message',(message)=>{
                console.log(message);
                io.emit("message",message);
            })
            socket.on('disconnect',()=>{
                console.log("user disconnected...")

            })
})

server.listen(5000,()=>{
    console.log("server is running on port 3000...");
})