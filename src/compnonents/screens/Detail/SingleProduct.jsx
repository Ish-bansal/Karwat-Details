import React from 'react';
const SingleProduct=(props)=>{
    return(
        <>
        <div className="single-product-gallery-item" id={props.id}>
                			<a data-lightbox="image-1" data-title="Gallery" href={props.link}>
                    		<img className="img-responsive" alt="" src="assets/images/blank.gif" data-echo={props.link} />
                			</a>
            			</div>
        </>
    )
}

const Multi=(props)=>{
    return(
        <>
         <div className="item">
                    <a className="horizontal-thumb active" data-target="#owl-single-product" data-slide={props.slide} href={props.href}>
                        <img className="img-responsive" width="85" alt="" src="assets/images/blank.gif" data-echo={props.link1} />
                    </a>
                </div>
        </>
    )
}

export {SingleProduct,Multi};