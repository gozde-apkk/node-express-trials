
const express = require('express');
const server = express();
server.use(express.json());

let id = 0;
function getId() {
     return id++ ;
}

let hobbits = [
    {id:getId() , name : "frodo"},
    {id:getId() , name : "merry"},
    {id:getId() , name : "sam"}

]

//CRUD OPERATIONS

//CREATE-POST
server.post('/' , (req ,res) =>{
   const newHobbit = {
    id : getId(),
    name : req.body.name
   }
   hobbits.push(newHobbit);
   const createdHobbit = hobbits[hobbits.length-1];
   res.status(201).json(createdHobbit);
})
//READ-GET
server.get('/' , (req ,res) =>{
    res.json(hobbits);
})

//UPDATE - PUT
server.put('/:id' , (req,res ) => {
    let hobbit = hobbits.find(item => item.id == req.params.id);
   
    if(hobbit){
        hobbit.name = req.body.name;
        res.send(`${req.params.id} id'li kullanıcı güncellendi...`)
    }else {
        res.status(404).json({message :`${req.params.id} id'li kullanıcı bulunamadı...` })
    }
})

//DELETE 
server.delete('/:id' , (req,res ) => {
    let hobbit = hobbits.find(item => item.id == req.params.id);
   
    if(hobbit){
        hobbits = hobbits.reduce((acc , item) => {
            if(item.id == req.params.id){
                return acc;
            }else {
                acc.push(item);
                return acc;
            }
        },[]);
        res.send(`${req.params.id} id'li kullanıcı silindi...`)
    }else {
        res.status(404).json({message :`${req.params.id} id'li kullanıcı bulunamadı...` })
    }
})


module.exports = server;