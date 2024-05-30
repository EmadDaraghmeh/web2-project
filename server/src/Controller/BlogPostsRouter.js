// import express from'express'
const express=require('express')
const brand=require('../Model/BlogPosts')
// import { Book } from '../models/bookModel.js'
const routerBlog=express.Router()


//Route for Save a new Book
routerBlog.post('/', async(req,res)=>{
    try{
        if(!req.body.date||!req.body.subject||!req.body.time||!req.body.content||!req.body.picture){
            return res.status(400).send({
                message:'send all required fileds: title, author, puvlishYear'
            })
        }
        const newBrand={
            date:req.body.date,
            subject:req.body.subject,
            time: req.body.time,
            content: req.body.content,
            picture:req.body.picture,
            }
        const brands=await brand.create(newBrand)
        return res.status(201).send(brands)
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

//Route for Get All Bkoos from database
routerBlog.get('/',async(req,res)=>{
    try{
     const brands=await brand.find({})
     return res.status(200).json({
        count:brands.length,
        data:brands
     })
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

// //Route for Get one book from database by id
routerBlog.get('/:id',async(req,res)=>{
    try{
        const {id}=req.params;
     const brands=await brand.findById(id)
     return res.status(500).json(brands)
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

//Route for Update a Book

routerBlog.put('/:id',async(req,res)=>{
    try{
        if(!req.body.date||!req.body.subject||!req.body.time||!req.body.content||!req.body.picture){
            return res.status(400).send({
                message:'send all required fileds: title, author, puvlishYear'
            })
        }
        const {id}=req.params;

        const result =await brand.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(404).json({message:'Book not found'})
        }
        return res.status(200).json({message:'Book updated successfully'})
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})



//Route for Delete a Book

routerBlog.delete('/:id',async(req,res)=>{
    try{
       const {id}=req.params;
       const result=await brand.findByIdAndDelete(id)
       if(!result){
        return res.status(404).json({message:'Book not found'})
       }
       return res.status(200).json({message:'Book Deleted successfully'})
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

module.exports=routerBlog