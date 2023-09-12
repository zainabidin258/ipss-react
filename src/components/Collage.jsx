import React from "react";
import '@/styles/collage.css'
import axios from "axios";
import { useEffect, useState } from 'react';
import Posts from './Posts';
import CollagePagination from "./CollagePagination";
import 'bootstrap/dist/css/bootstrap.css';


const Collage = () => {
    const [posts, setPosts]=useState([]);
    const [loading, setLoading]=useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage]=useState(4);


//logic for pagination
//Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost , indexOfLastPost)


//Change page
    const Paginate = pageNumbers => setCurrentPage(pageNumbers);

//get request for image posts using axios
useEffect(() => {
    const fetchPosts = async() => {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        const extractedUrl= response.data.slice(0,100).map(item => item.url)
        setPosts(extractedUrl);
        setLoading(false);
        // console.log(response.data);
    }

        fetchPosts();
        
    },[]);

return (
    <>
        <div className="wrapper">
                
            <div className="div1">
                <div>
                    <h4> Recent Reports</h4>
                </div>

                <div className="searchbar">
                    searchbar here
                </div>

                <div className="collage">
                    <Posts 
                        posts={currentPosts} 
                        loading={loading}
                    />
                </div>

                <div className="pagination" style={{marginBottom:'10px'}}>
                    <CollagePagination 
                        postsPerPage={postsPerPage} 
                        totalPosts={posts.length} 
                        Paginate={Paginate} 
                        currentPage={currentPage} 
                        setCurrentPage={setCurrentPage}
                        // maxPageNumberLimit={maxPageNumberLimit}
                        // minPageNumberLimit={minPageNumberLimit}
                    />
                </div>
            </div>    

            <div className="pair">
                <div className="upload">
                    <button className="btn">upload button here </button>
                </div>
                <div className="balance">
                    <button className="btn">
                        purchase credit button here
                    </button>
                </div>
            </div>

                
        </div>
                
    </>
    )
};
export default Collage;