// import express from 'express';
// const router = express.Router();

import { Router } from "express";
import { createBlog, getAllBlogs, getBlogDetails } from "../controllers/blog.controller.js";

const router = new Router();    

//get router for getAll blogs
router.get('/', getAllBlogs);

//get router for single blog details
router.get('/:blogId', getBlogDetails);

//post route to add new blog
router.post('/', createBlog);


export default router;

