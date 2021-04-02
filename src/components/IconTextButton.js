import React, {useState} from 'react';
import './style.css'

export default function IconTextButton({tag, handleButton, pageNumber, buttonState}) {

    const handleChange = () => {
        handleButton(pageNumber, tag)
    }
    
    return (
        <button 
        onClick={handleChange}
        type="button"
        style={buttonState==tag? {background: "linear-gradient(125deg, #5132e2 0%, #6a2ee5 50%, #8329e9 100%)", color:"white"} : {}} 
        className="icon-text-btn">{tag}</button>
    );
  }