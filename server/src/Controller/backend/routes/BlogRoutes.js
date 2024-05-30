const express = require('express');
const Blog=require('../../../Model/BlogPosts')
const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        if(!req.body.date||req.body.title||req.body.content){
          return res.status(400).send({
            message: 'Send all required fields: date,title,content'
          });
        }
      const newBlog={
        date:req.body.date,
        subject:req.body.title,
        content:req.body.content,
        picture:req.body.image
      };
      const blog= await Blog.create(newBlog);
    return res.status(201).send(blog);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send({ message: 'internal server error' });
    }
});

router.get('/',async(req,res)=>{
    try{
const blogs=await Blog.find({});
return res.status(200).json({
    data:blogs
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
    const blog =await Blog.findById(id);
    if(!blog){
        return res.status(400).json({message:'blog not found'});
    }
    return res.status(200).json(blog);
}

catch(error){
    console.error(error.message);
    res.status(500).send({ message: 'internal server error' });
}
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.date || !req.body.title||!req.body.content||req.body.image) {
            return res.status(400).send({
                message: 'Send all required fields: date,title,content,image'
            });
        }
        const { id } = req.params;
        const result = await Blog.findByIdandUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        return res.status(200).json({ message: 'Blog updated successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: 'internal server error' });
    }
});
module.exports=router;