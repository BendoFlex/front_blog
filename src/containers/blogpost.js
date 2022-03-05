import React from "react"
import {useLocation} from 'react-router-dom'



export default function Post (){
    const location = useLocation()
    const props =location.state
    console.log()
    return(
        <div className='article_res'>
            <h2 className = 'article_title'>{props.title}</h2>
            <p>id :{props._id}</p>
            <div className='author'>
                <p>Auteur : {props.author}</p>
            </div>
            <div className='article_content'>
                <p>{props.content}</p>
            </div>
            <p>Quizz</p>
            <button onClick={()=>alert("Apparition du quizz!")}>Afficher le quizz</button>
        </div>
    )
}