import React from 'react';
// import { Link } from 'react-router-dom'

const Accordation=(props)=>{
    return(
    <div className="accordion-group">
<div className="accordion-heading"> <a href={props.link} data-toggle="collapse" className="accordion-toggle collapsed">
 {props.categoryName} </a> </div>
        <div className="accordion-body collapse" id={props.id} style={{height: "0px"}}>
            <div className="accordion-inner">
                <ul>
                   <li><a href="#">gaming</a></li>
                   <li><a href="#">office</a></li>
                   <li><a href="#">kids</a></li>
                   <li><a href="#">for women</a></li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Accordation;