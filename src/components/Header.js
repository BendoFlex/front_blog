import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.8rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: black;
  border: 2px solid black;

  /* target primary button */
  ${props => props.primary && css`
    background: black;
    color: white;
  `}
  `
  
const inputSearch = styled.input`
    background:yellow
`

export default function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/whoami">Qui je suis</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                    
                </ul>
            </nav>
            <div>
                <Button><Link to="/login">Connexion</Link></Button>
                <Button><Link to="/register">S enregistrer</Link></Button>
                <form action="/">
                    <input type="text" name="search" id="search" />
                    <input type="submit" value="Rechercher" />
                </form>
            </div>

        </header>
    )
}