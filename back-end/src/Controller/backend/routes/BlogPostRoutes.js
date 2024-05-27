const express = require('express');
const Blog=require('../Model/BlogPost')
const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        if(!req.body.title||req.body.author||!req.body.date||!req.body.image||req.body.paragraphs){
          return res.status(400).send({
            message: 'Send all required fields: title,author,date,image,paragraphs'
          });
        }
      const newBlogPost={
        title:req.body.title,
      author:req.body.author,
        date:req.body.date,
        image:req.body.image,
        paragraphs:req.body.paragraphs
      };
      const blogpost= await BlogPost.create(newBlogPost);
    return res.status(201).send(blogpost);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send({ message: 'internal server error' });
    }
});

router.get('/',async(req,res)=>{
    try{
const blogspost=await BlogPost.find({});
return res.status(200).json({
    data:blogspost
});
    }
catch(error){
    console.error(error.message);
    res.status(500).send({ message: 'internal server error' });
}
});

router.get('/:id',async(req,res)=>{
try{
    const {id}=req.params;
    const blogpost =await BlogPost.findById(id);
    if(!blogpost){
        return res.status(400).json({message:'BlogPost not found'});
    }
    return res.status(200).json(blogpost);
}

catch(error){
    console.error(error.message);
    res.status(500).send({ message: 'internal server error' });
}
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title||req.body.author||!req.body.date||!req.body.image||req.body.paragraphs) {
            return res.status(400).send({
                message: 'Send all required fields: title,author,date,image,paragraphs'
            });
        }
        const { id } = req.params;
        const result = await Blog.findByIdandUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'BlogPost not found' });
        }
        return res.status(200).json({ message: 'BlogPost updated successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: 'internal server error' });
    }
});
module.exports=router;