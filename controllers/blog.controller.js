
import Blog from "../models/blog.model.js";



export const createBlog = async (req, res) =>{
    const blogData = req.body;
    try{
        const blog = await Blog.create(blogData);
        res.status(201).send(blog);
    }catch(e){
        res.status(503).json({"error":e.message});
    }

};

export const getAllBlogs = async (req, res) =>{
    try {
        const blogData = await Blog.find();
        res.status(200).send({
            "count": blogData.length,
            blogData});

    } catch (error) {
        res.status(503).send({"error":error.message});
    }
   
};

export const getBlogDetails = async (req, res) =>{
    try {
        const {blogId} =  req.params;
        const data = await Blog.findById(blogId);
        res.status(200).send(data);
    } catch (error) {
        res.status(503).send({"error":error.message});
    }
};

export const renderBlogs = async(req,res)=>{
    const blogs = await Blog.find();
    res.render('blogList',{blogs});
}

export const renderBlogDetails = async(req,res)=>{
    const {blog} = req.params;
    const blogDetails = await Blog.findById(blog);
    res.render('blogDetails',{"blog": blogDetails});
}

