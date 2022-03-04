import React from "react"
import {Link} from 'react-router-dom'


export default function Post (post){
    return(
        <div className='article_res'>
            <h2 className = 'article_title'>{post.title}</h2>
                <div className='author'>
                    <p>Auteur : {post.author}</p>
                </div>
            <Link to ="/article/" post={post} />
        </div>
    )
}