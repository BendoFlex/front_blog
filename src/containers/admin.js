import React , {useState} from 'react'
import '../assets/styles.css'

export default function Admin(){
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    console.log("title is "+title)
    console.log("text is "+text)
    return(
        <>
            <h1>Admin</h1>
            <p>Editer un article</p>

            <form action="/edit" method="post">
                <input type="text" name="title" id="title"  onChange = {(e)=>setTitle(e.target.value)} />
                <p>Modifier le corps du texte</p>
                <input type="textarea" placeholder='Ecrire ici tes pensées'width={50} height={200} onChange = {(e)=>setText(e.target.value)}/>
                <input type="submit" value="Valider" />
            </form>
        </>
        
    )
}