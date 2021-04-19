import axios from "axios";
import React, { useEffect } from "react";

import { useState } from "react";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL + 'posts').then((response) => {
            setPosts(response.data);
            console.log(response);
        });
    },[]);

    return (

        <div>
            {posts.map((p) => (
                <Post post={p} key={p._id}/> 
            ))}
        </div>
     
    );
  };
export default Posts;