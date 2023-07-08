// import React from 'react'
import "./Card.css"


// eslint-disable-next-line react/prop-types
export default function Card({image,title,text,className}) {

  return (
    <div className={`card ${className} `}>
        <img src={image} className="logo"/>

        <h2 className="title">{title}</h2>

        <p className="text">{text}</p>

        <button className={`button `}>Learn More</button>
    </div>
  )
}
