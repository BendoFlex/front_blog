import React , {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import BlogPost from './blogpost'
import "../assets/styles.css"




const posts7 = [
    {
        id : 516531,
        title :"Hello World",
        author :"Joan",
        content  : "Hello World ,Bonjour  Monde, おはよう 世界",
        quizz : {
            question :"Comment dit on Hello World en Japonais ? ",
            responses : ["おはよう 世界", "私は大きな魚です" ,"それは中国人です","何?"]
        }
    }
]


export default function Posts () {
    const [posts,setPosts] = useState()
    useEffect(()=> {
        fetch("http://localhost:3000/articles")
        .then(response => response.json()
                                  .then(json => setPosts(json))
        )
        //62222171b8ab7358d3bc02d2
    },[])
 
    //si on ne mais pas posts && posts.map=> il y aura un problème d'affichage
    console.log(posts)

    return(
        <>
            <h1>Mes derniers posts</h1>

            { posts && posts.map((post,i)=>(
                    <div className='article_res' key={i}>
                        <h2 className = 'article_title'>{post.title}</h2>
                        
                        <div className='author'>
                            <p>Auteur : {post.author}</p>
                        </div>
                       <button> <Link to ="/postsid" state={post} >Voir</Link></button>
                    </div>
            ))
            }
        </>
    )
}