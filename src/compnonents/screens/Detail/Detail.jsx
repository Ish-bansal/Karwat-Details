import React from 'react';
import HotDeals from '../../../compnonents/screens/homecomponent/HotDeals'
import Hotdata from '../../../compnonents/screens/homecomponent/Hotdata'
import Testimonials from '../../../compnonents/screens/homecomponent/Testimonials'
import Testimonialdata from '../../../compnonents/screens/homecomponent/Testimonialdata'
import DetailBlock from '../../../compnonents/screens/Detail/DetailBlock';
import Upsell from '../../../compnonents/screens/Detail/Upsell'
// import { DetailBlockData } from './DetailBlockData';


function nproduct(val) {

	return (
		 <HotDeals
			  imgsrc={val.imgsrc}
			  poff={val.poff}
			  pname={val.pname}
			  oprice={val.oprice}
			  dprice={val.dprice}
		 />
	)
}
// function ucard(uval){
//     return(
//         <Upsell
//             image={uval.image}
//             sale={uval.sale}
//             tag={uval.tag}
//         />
//     )
// }
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
                <img src="assets/images/banners/LHS-banner.jpg" alt=""/>
                </div>	
                  {/* ============================================== HOT DEALS ==============================================  */}
				  <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
                                        <h3 className="section-title">hot deals</h3>
                                        <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">




                                             {Hotdata.map(nproduct)}

                                        </div>
                                        {/* <!-- /.sidebar-widget --> */}
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
 {/* ============================================== NEWSLETTER: END ============================================== */}
 <div className="sidebar-widget  wow fadeInUp outer-top-vs ">
                <div id="advertisement" className="advertisement">
                    {Testimonialdata.map((hval)=>{
                    return(
                        <Testimonials
                        imgsrc={hval.imgsrc}
                        data={hval.data}
                        name={hval.name}
                        company={hval.company}
                         />
                    )
                })}
                </div>
            </div>
						</div> {/*sidebar module container  */}
                    </div>
                    {/* col-md-3 sidebar */}

					
                <div class="col-md-9">
				<DetailBlock/>
				<Upsell/>

                
                
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