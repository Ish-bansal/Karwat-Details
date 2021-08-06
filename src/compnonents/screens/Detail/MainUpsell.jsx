import React from 'react';

const MainUpsell=(props)=>{
    return(
        <>
        <section className="section featured-product wow fadeInUp">
	<h3 className="section-title">upsell products</h3>
	<div className="owl-carousel home-owl-carousel upsell-product custom-carousel owl-theme outer-top-xs">	    	
		<div className="item item-carousel">
			<div className="products">			
	<div className="product">		
		<div className="product-image">
			<div className="image">
				<a href="detail.html"><img  src={props.link} alt=""/></a>
			</div>{/* /.image */}			
			            <div className={props.sale}><span>{props.tag}</span></div>            		   
		</div>{/* /.product-image */}
			<div className="product-info text-left">
			<h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
			<div className="rating rateit-small"></div>
			<div className="description"></div>
			<div className="product-price">	
				<span className="price">$650.99	</span> <span className="price-before-discount">$ 800</span>
			</div>{/* /.product-price */}
			</div>{/* /.product-info */}
					<div className="cart clearfix animate-effect">
				<div className="action">
					<ul className="list-unstyled">
						<li className="add-cart-button btn-group">
			<button className="btn btn-primary icon" data-toggle="dropdown" type="button"><i className="fa fa-shopping-cart"></i></button>
							<button className="btn btn-primary cart-btn" type="button">Add to cart</button>												
						</li>	                   
		                <li className="lnk wishlist">
							<a className="add-to-cart" href="detail.html" title="Wishlist">
								 <i className="icon fa fa-heart"></i>
							</a>
						</li>
						<li className="lnk">
							<a className="add-to-cart" href="detail.html" title="Compare">
							    <i className="fa fa-signal"></i>
							</a>
						</li>
					</ul>
				</div>{/* /.action */}
			</div>{/* /.cart */}
			</div>{/* /.product */}
      
			</div>{/* /.products */}
		</div>{/* /.item */}
	</div>{/* /.home-owl-carousel */}  
	</section>   {/* /.section */}
        </>
    )
}

export default MainUpsell;