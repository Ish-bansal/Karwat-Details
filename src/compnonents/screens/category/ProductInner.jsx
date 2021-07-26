import React from 'react';

const ProductInner=(props)=>{
    return(
        <>
        <div className="category-product-inner wow fadeInUp">
                  <div className="products">
                    <div className="product-list product">
                      <div className="row product-list-row">
                        <div className="col col-sm-4 col-lg-4">
                          <div className="product-image">
                            <div className="image"> <img src={props.img_link} alt=""/> </div>
                          </div>
                          {/* /.product-image */} 
                        </div>
                        {/* /.col */}
                        <div className="col col-sm-8 col-lg-8">
                          <div className="product-info">
                            <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                            <div className="rating rateit-small"></div>
                            <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                            {/* /.product-price */}
                            <div className="description m-t-10">Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget, lacinia id purus. Suspendisse posuere arcu diam, id accumsan eros pharetra ac. Nulla enim risus, facilisis bibendum gravida eget.</div>
                            <div className="cart clearfix animate-effect">
                              <div className="action">
                                <ul className="list-unstyled">
                                  <li className="add-cart-button btn-group">
                                    <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                  </li>
                                  <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart"></i> </a> </li>
                                  <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal"></i> </a> </li>
                                </ul>
                              </div>
                              {/* /.action */} 
                            </div>
                            {/* /.cart */} 
                            
                          </div>
                          {/* /.product-info */} 
                        </div>
                        {/* /.col */} 
                      </div>
                      {/* /.product-list-row */}
                      <div className="tag new"><span>new</span></div>
                    </div>
                    {/* /.product-list */} 
                  </div>
                  {/* /.products */} 
                </div>
                {/* /.category-product-inner */}
        </>
    )
}

export default ProductInner;