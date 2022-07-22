import React from 'react'
import {Card} from './styles';



function CardPost(props: any) {
  return (
    <Card>
        <div className="cardbody">
            <img src={props.img} alt={props.alt}/>
           <div className="titlediv">
           <h4>{props.title}</h4>
            <time>{props.time}</time>
           </div>
            <h3>{props.subtitle}</h3>
        </div>
        
    </Card>
  )
}

export default CardPost