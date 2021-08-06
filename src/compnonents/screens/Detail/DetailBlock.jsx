import React from 'react';
import { SingleProduct,Multi } from '../../../compnonents/screens/Detail/SingleProduct';
import {DetailBlockData,NewDetailBlock} from '../../../compnonents/screens/Detail/DetailBlockData';
// import DetailBlockCo from './DetailBlockCo';

const DetailBlock=(props)=>{
    return(
        <>
         <div className="detail-block">
				<div className="row wow fadeInUp">
                
					    <div className="col-xs-12 col-sm-6 col-md-5 gallery-holder">
    					<div className="product-item-holder size-big single-product-gallery small-gallery">
        				<div id="owl-single-product">
            			{
							DetailBlockData.map((dval)=>{
								return(
									<SingleProduct
									id={dval.id}
            						link={dval.link}/>
								)
							})
						}


            			</div>
            {/* single-product-slider */} 


        <div className="single-product-gallery-thumbs gallery-thumbs">

            <div id="owl-single-product-thumbnails">
               {
				   NewDetailBlock.map((dval)=>{
					   return(
						   <Multi
						   slide={dval.slide}
							href={dval.href}
							link1={dval.link1}
						/>
					   )
				   })
			   }

            </div> {/* #owl-single-product-thumbnails */} 
            </div> {/* .gallery-thumbs */} 
</div>  {/* .single-product-gallery */} 
</div>  {/* .gallery-holder */}        			 
					<div className='col-sm-6 col-md-7 product-info-block'>
						<div className="product-info">
							<h1 className="name">Floral Print Buttoned</h1>
							
							<div className="rating-reviews m-t-20">
								<div className="row">
									<div className="col-sm-3">
										<div className="rating rateit-small"></div>
									</div>
									<div className="col-sm-8">
										<div className="reviews">
											<a href="#" className="lnk">(13 Reviews)</a>
										</div>
									</div>
								</div>{/* /.row */}		
							</div>{/* /.rating-reviews */}

							<div className="stock-container info-container m-t-10">
								<div className="row">
									<div className="col-sm-2">
										<div className="stock-box">
											<span className="label">Availability :</span>
										</div>	
									</div>
									<div className="col-sm-9">
										<div className="stock-box">
											<span className="value">In Stock</span>
										</div>	
									</div>
								</div>{/* /.row */}	
							</div>{/* /.stock-container */}

							<div className="description-container m-t-20">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</div>{/* /.description-container */}

							<div className="price-container info-container m-t-20">
								<div className="row">
									

									<div className="col-sm-6">
										<div className="price-box">
											<span className="price">$800.00</span>
											<span className="price-strike">$900.00</span>
										</div>
									</div>

									<div className="col-sm-6">
										<div className="favorite-button m-t-10">
											<a className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Wishlist" href="#">
											    <i className="fa fa-heart"></i>
											</a>
											<a className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="Add to Compare" href="#">
											   <i className="fa fa-signal"></i>
											</a>
											<a className="btn btn-primary" data-toggle="tooltip" data-placement="right" title="E-mail" href="#">
											    <i className="fa fa-envelope"></i>
											</a>
										</div>
									</div>

								</div>{/* /.row */}
							</div>{/* /.price-container */}

							<div className="quantity-container info-container">
								<div className="row">
									
									<div className="col-sm-2">
										<span className="label">Qty :</span>
									</div>
									
									<div className="col-sm-2">
										<div className="cart-quantity">
											<div className="quant-input">
								                <div className="arrows">
								                  <div className="arrow plus gradient"><span className="ir"><i className="icon fa fa-sort-asc"></i></span></div>
								                  <div className="arrow minus gradient"><span className="ir"><i className="icon fa fa-sort-desc"></i></span></div>
								                </div>
								                <input type="text" value="1"/>
							              </div>
							            </div>
									</div>

									<div className="col-sm-7">
										<a href="#" className="btn btn-primary"><i className="fa fa-shopping-cart inner-right-vs"></i> ADD TO CART</a>
									</div>

									
								</div>{/* /.row */}
							</div>{/* /.quantity-container */}

							

							

							
						</div>{/* /.product-info */}
					</div>{/* /.col-sm-7 */}
				</div>{/* /.row */}
                </div>

				<div className="product-tabs inner-bottom-xs  wow fadeInUp">
					<div className="row">
						<div className="col-sm-3">
							<ul id="product-tabs" className="nav nav-tabs nav-tab-cell">
								<li className="active"><a data-toggle="tab" href="#description">DESCRIPTION</a></li>
								<li><a data-toggle="tab" href="#review">REVIEW</a></li>
								<li><a data-toggle="tab" href="#tags">TAGS</a></li>
							</ul>{/* /.nav-tabs #product-tabs */}
						</div>
						<div className="col-sm-9">

							<div className="tab-content">
								
								<div id="description" className="tab-pane in active">
									<div className="product-tab">
										<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>	
								</div>{/* /.tab-pane */}

								<div id="review" className="tab-pane">
									<div className="product-tab">
																				
										<div className="product-reviews">
											<h4 className="title">Customer Reviews</h4>

											<div className="reviews">
												<div className="review">
													<div className="review-title"><span className="summary">We love this product</span><span className="date"><i className="fa fa-calendar"></i><span>1 days ago</span></span></div>
													<div className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam suscipit."</div>
																										</div>
											
											</div>{/* /.reviews */}
										</div>{/* /.product-reviews */}
										

										
										<div className="product-add-review">
											<h4 className="title">Write your own review</h4>
											<div className="review-table">
												<div className="table-responsive">
													<table className="table">	
														<thead>
															<tr>
																<th className="cell-label">&nbsp;</th>
																<th>1 star</th>
																<th>2 stars</th>
																<th>3 stars</th>
																<th>4 stars</th>
																<th>5 stars</th>
															</tr>
														</thead>	
														<tbody>
															<tr>
																<td className="cell-label">Quality</td>
																<td><input type="radio" name="quality" className="radio" value="1"/></td>
																<td><input type="radio" name="quality" className="radio" value="2"/></td>
																<td><input type="radio" name="quality" className="radio" value="3"/></td>
																<td><input type="radio" name="quality" className="radio" value="4"/></td>
																<td><input type="radio" name="quality" className="radio" value="5"/></td>
															</tr>
															<tr>
																<td className="cell-label">Price</td>
																<td><input type="radio" name="quality" className="radio" value="1"/></td>
																<td><input type="radio" name="quality" className="radio" value="2"/></td>
																<td><input type="radio" name="quality" className="radio" value="3"/></td>
																<td><input type="radio" name="quality" className="radio" value="4"/></td>
																<td><input type="radio" name="quality" className="radio" value="5"/></td>
															</tr>
															<tr>
																<td className="cell-label">Value</td>
																<td><input type="radio" name="quality" className="radio" value="1"/></td>
																<td><input type="radio" name="quality" className="radio" value="2"/></td>
																<td><input type="radio" name="quality" className="radio" value="3"/></td>
																<td><input type="radio" name="quality" className="radio" value="4"/></td>
																<td><input type="radio" name="quality" className="radio" value="5"/></td>
															</tr>
														</tbody>
													</table>{/* /.table .table-bordered */}
												</div>{/* /.table-responsive */}
											</div>{/* /.review-table */}
											
											<div className="review-form">
												<div className="form-container">
													<form role="form" className="cnt-form">
														
														<div className="row">
															<div className="col-sm-6">
																<div className="form-group">
																	<label for="exampleInputName">Your Name <span className="astk">*</span></label>
																	<input type="text" className="form-control txt" id="exampleInputName" placeholder=""/>
																</div>{/* /.form-group */}
																<div className="form-group">
																	<label for="exampleInputSummary">Summary <span className="astk">*</span></label>
																	<input type="text" className="form-control txt" id="exampleInputSummary" placeholder=""/>
																</div>{/* /.form-group */}
															</div>

															<div className="col-md-6">
																<div className="form-group">
																	<label for="exampleInputReview">Review <span className="astk">*</span></label>
																	<textarea className="form-control txt txt-review" id="exampleInputReview" rows="4" placeholder=""></textarea>
																</div>{/* /.form-group */}
															</div>
														</div>{/* /.row */}
														
														<div className="action text-right">
															<button className="btn btn-primary btn-upper">SUBMIT REVIEW</button>
														</div>{/* /.action */}

													</form>{/* /.cnt-form */}
												</div>{/* /.form-container */}
											</div>{/* /.review-form */}

										</div>{/* /.product-add-review */}										
										
							        </div>{/* /.product-tab */}
								</div>{/* /.tab-pane */}

								<div id="tags" className="tab-pane">
									<div className="product-tag">
										
										<h4 className="title">Product Tags</h4>
										<form role="form" className="form-inline form-cnt">
											<div className="form-container">
									
												<div className="form-group">
													<label for="exampleInputTag">Add Your Tags: </label>
													<input type="email" id="exampleInputTag" className="form-control txt"/>
													

												</div>

												<button className="btn btn-upper btn-primary" type="submit">ADD TAGS</button>
											</div>{/* /.form-container */}
										</form>{/* /.form-cnt */}

										<form role="form" className="form-inline form-cnt">
											<div className="form-group">
												<label>&nbsp;</label>
												<span className="text col-md-offset-3">Use spaces to separate tags. Use single quotes (') for phrases.</span>
											</div>
										</form>{/* /.form-cnt */}

									</div>{/* /.product-tab */}
								</div>{/* /.tab-pane */}

							</div>{/* /.tab-content */}
						</div>{/* /.col */}
					</div>{/* /.row */}
				</div>{/* /.product-tabs */}
        </>
    )
}

export default DetailBlock;