import React from 'react';
import HotDeals from '../../../compnonents/screens/homecomponent/HotDeals'
import Hotdata from '../../../compnonents/screens/homecomponent/Hotdata'
import Testimonials from '../../../compnonents/screens/homecomponent/Testimonials'
import Testimonialdata from '../../../compnonents/screens/homecomponent/Testimonialdata'
import UpsellData from '../../../compnonents/screens/Detail/UpsellData'
import Upsell from '../../../compnonents/screens/Detail/Upsell'
import DetailBlock from '../../../compnonents/screens/Detail/DetailBlock'
import DetailBlockData from '../../../compnonents/screens/Detail/DetailBlockData'

const Detail=()=>{
    return(
        <>
            <div className="breadcrumb">
	        <div className="container">
		    <div className="breadcrumb-inner">
			<ul className="list-inline list-unstyled">
				<li><a href="#">Home</a></li>
				<li><a href="#">Clothing</a></li>
				<li className='active'>Floral Print Buttoned</li>
			</ul>
		    </div>
	        </div>
            </div>
<div className="body-content outer-top-xs">
	<div className='container'>
		<div className='row single-product'>
			<div className='col-md-3 sidebar'>
				<div className="sidebar-module-container">
				<div className="home-banner outer-top-n">
                <img src="assets/images/banners/LHS-banner.jpg" alt="Image"/>
                </div>	
                  {/* ============================================== HOT DEALS ==============================================  */}
                 <div classNameName="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
                    <h3 classNameName="section-title">hot deals</h3>
                    <div classNameName="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
                        {Hotdata.map((val)=>{
                            return (
                                <HotDeals
                                    imgsrc={val.imgsrc}
                                    poff={val.poff}
                                    pname={val.pname}
                                    oprice={val.oprice}
                                    dprice={val.dprice}
                                />
                            )
                        })}
                    </div>  {/* sidebar-widget */}
                    </div>
                {/* ============================================== HOT DEALS: END ==============================================  */}
                {/* ============================================== NEWSLETTER ============================================== */}
<div className="sidebar-widget newsletter wow fadeInUp outer-bottom-small outer-top-vs">
	<h3 className="section-title">Newsletters</h3>
	<div className="sidebar-widget-body outer-top-xs">
		<p>Sign Up for Our Newsletter!</p>
        <form>
        	 <div className="form-group">
			    <label className="sr-only" for="exampleInputEmail1">Email address</label>
			    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter"/>
			  </div>
			<button className="btn btn-primary">Subscribe</button>
		</form>
	</div>
</div>
</div>	
 {/* ============================================== NEWSLETTER: END ============================================== */}
                        <div classNameName="sidebar-widget  wow fadeInUp outer-top-vs ">
                            <div id="advertisement" classNameName="advertisement">
                                {Testimonialdata.map((val)=>{
                                    return (
                                        <Testimonials
                                            imgsrc={val.imgsrc}
                                            data={val.data}
                                            name={val.name}
                                            company={val.company}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* col-md-3 sidebar */}
                <div class='col-md-9'>
                {DetailBlockData.map((val)=>{
                    return(
                        <DetailBlock 
                            id={val.id}
                            link={val.link}
                            slide={val.slide}
                            href={val.href}
                            link1={val.link1}
                        />
                    )
                })}

                {
                    UpsellData.map((val)=>{
                    return(
                        <Upsell
                            image={val.image}
                            sale={val.sale}
                            tag={val.tag}
                        />
                    )
                })
                }
                
                </div> {/* /.col */} 
			<div class="clearfix"></div>
		</div>{/*  /.row */} 
		{/* ============================================== BRANDS CAROUSEL ============================================== */} 
            <div id="brands-carousel" class="logo-slider wow fadeInUp">

		        <div class="logo-slider-inner">	
			    <div id="brand-slider" class="owl-carousel brand-slider custom-carousel owl-theme">
				<div class="item m-t-15">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>

				<div class="item m-t-10">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}

				<div class="item">
					<a href="#" class="image">
						<img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
					</a>	
				</div>{/*/.item*/}
		    </div>{/* /.owl-carousel #logo-slider */}
		</div>{/* /.logo-slider-inner */}
	
</div>{/* /.logo-slider */}
{/* ============================================== BRANDS CAROUSEL : END ============================================== */}
	</div>{/* /.container */}
</div>{/* /.body-content */}


        </>
    )
}
export default Detail;