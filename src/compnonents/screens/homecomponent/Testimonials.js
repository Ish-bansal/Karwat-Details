import React from 'react';
// import { Link } from 'react-router-dom'








const Testimonials = (props) => {

    return (

            <div className="item">
                <div className="avatar"><img src={props.imgsrc} alt="" /></div>
                <div className="testimonials"><em>"</em> {props.data}<em>"</em></div>
                <div className="clients_author">{props.name} <span>{props.company}</span> </div>
               
              </div>
             

        )
    }
    
    
    
    export default Testimonials
    