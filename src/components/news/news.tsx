import React from 'react'
import {Section} from './styles';

function News() {
  return (
   <Section>
    <div className="imgdiv">
      <img src="/example.jpg"/>
    </div>
    <footer className="infosection">
      <div className="infodiv">
        <span>Grand Theft Auto: The Trilogy - The Definitive Edition</span>
        <h3>Grand Theft Auto: The Trilogy - The Definitive Edition | Trailer</h3>
      </div>
      <button> ASSISTA AGORA </button>

      <span> </span>
    </footer>

   </Section>
  )
}

export default News