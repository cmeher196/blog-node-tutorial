import express from 'express';
import BlogRoutes from './routes/blog.route.js';
import {config} from 'dotenv';
import connectToDB from './config/dbConnection.js';
import { renderBlogDetails, renderBlogs } from './controllers/blog.controller.js';

config();

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/health', (req, res) => {
    res.status(200).send('service is up');
});

app.use(express.json());
app.use('/api/blog', BlogRoutes);

app.get('/blogs', renderBlogs);
app.get('/blogs/:blog', renderBlogDetails);

app.all('*', function(req, res){
    res.status(404).send("404 Page Not Found!!");
});


app.listen(PORT, async()=>{
    await connectToDB();
    console.log(`Server is listening on ${PORT}`);
});