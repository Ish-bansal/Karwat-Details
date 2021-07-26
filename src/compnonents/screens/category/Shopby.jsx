import React from 'react';
import Accordation from '../../../compnonents/screens/category/Accordation';
import AccordationData from '../../../compnonents/screens/category/AccordationData';
// import { Link } from 'react-router-dom';
import Testimonials from '../../../compnonents/screens/homecomponent/Testimonials';
import Testimonialdata from '../../../compnonents/screens/homecomponent/Testimonialdata';

const Shopby=()=>{
    return(
        <>
        <div className="sidebar-module-container">
          <div className="sidebar-filter"> 
            {/* ============================================== SIDEBAR CATEGORY ============================================== */}
            <div className="sidebar-widget wow fadeInUp">
              <h3 className="section-title">shop by</h3>
              <div className="widget-header">
                <h4 className="widget-title">Category</h4>
              </div>
              <div className="sidebar-widget-body">
                <div className="accordion">
                  {AccordationData.map((vala)=>{
                        return(
                            <Accordation
                            link={vala.link}
                            categoryName={vala.categoryName}
                            id={vala.id}/>
                        )
                  })}
                  
                </div>
                {/* /.accordion */} 
              </div>
              {/* /.sidebar-widget-body */} 
            </div>
            {/* /.sidebar-widget */} 
            {/* ============================================== SIDEBAR CATEGORY : END ============================================== */} 
            
            {/* ============================================== PRICE SILDER============================================== */}
            <div className="sidebar-widget wow fadeInUp">
              <div className="widget-header">
                <h4 className="widget-title">Price Slider</h4>
              </div>
              <div className="sidebar-widget-body m-t-10">
                <div className="price-range-holder"> <span className="min-max"> <span className="pull-left">$200.00</span> <span className="pull-right">$800.00</span> </span>
                  <input type="text" id="amount" style={{border:"0" , color:"#666666", fontWeight:"bold",textAlign:"center",}}/>
                  <input type="text" className="price-slider" value="" />
                </div>
                {/* /.price-range-holder */} 
                <a href="#" className="lnk btn btn-primary">Show Now</a> </div>
              {/* /.sidebar-widget-body */} 
            </div>
            {/* /.sidebar-widget */} 
            {/* ============================================== PRICE SILDER : END ============================================== */} 
            {/* ============================================== MANUFACTURES============================================== */}
            <div className="sidebar-widget wow fadeInUp">
              <div className="widget-header">
                <h4 className="widget-title">Manufactures</h4>
              </div>
              <div className="sidebar-widget-body">
                <ul className="list">
                  <li><a href="#">Forever 18</a></li>
                  <li><a href="#">Nike</a></li>
                  <li><a href="#">Dolce & Gabbana</a></li>
                  <li><a href="#">Alluare</a></li>
                  <li><a href="#">Chanel</a></li>
                  <li><a href="#">Other Brand</a></li>
                </ul>
                {/*<a href="#" className="lnk btn btn-primary">Show Now</a>*/} 
              </div>
              {/* /.sidebar-widget-body */} 
            </div>
            {/* /.sidebar-widget */} 
            {/* ============================================== MANUFACTURES: END ============================================== */} 
            {/* ============================================== COLOR============================================== */}
            <div className="sidebar-widget wow fadeInUp">
              <div className="widget-header">
                <h4 className="widget-title">Colors</h4>
              </div>
              <div className="sidebar-widget-body">
                <ul className="list">
                  <li><a href="#">Red</a></li>
                  <li><a href="#">Blue</a></li>
                  <li><a href="#">Yellow</a></li>
                  <li><a href="#">Pink</a></li>
                  <li><a href="#">Brown</a></li>
                  <li><a href="#">Teal</a></li>
                </ul>
              </div>
              {/* /.sidebar-widget-body */} 
            </div>
            {/* /.sidebar-widget */} 
            {/* ============================================== COLOR: END ============================================== */} 
            {/* ============================================== COMPARE============================================== */}
            <div className="sidebar-widget wow fadeInUp outer-top-vs">
              <h3 className="section-title">Compare products</h3>
              <div className="sidebar-widget-body">
                <div className="compare-report">
                  <p>You have no <span>item(s)</span> to compare</p>
                </div>
                {/* /.compare-report */} 
              </div>
              {/* /.sidebar-widget-body */} 
            </div>
            {/* /.sidebar-widget */} 
            {/* ============================================== COMPARE: END ============================================== */} 
            {/* ============================================== PRODUCT TAGS ============================================== */}
            <div className="sidebar-widget product-tag wow fadeInUp outer-top-vs">
              <h3 className="section-title">Product tags</h3>
              <div className="sidebar-widget-body outer-top-xs">
                <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> 
                    <a className="item active" title="Vest" href="category.html">Vest</a> 
                    <a className="item" title="Smartphone" href="category.html">Smartphone</a> 
                    <a className="item" title="Furniture" href="category.html">Furniture</a> 
                    <a className="item" title="T-shirt" href="category.html">T-shirt</a> 
                    <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> 
                    <a className="item" title="Sneaker" href="category.html">Sneaker</a>
                    <a className="item" title="Toys" href="category.html">Toys</a> 
                    <a className="item" title="Rose" href="category.html">Rose</a>
                </div>
                {/* /.tag-list */} 
              </div>
              {/* /.sidebar-widget-body */} 
            </div> {/* /.sidebar-widget */} 
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
            <div class="home-banner"> <img src="assets/images/banners/LHS-banner.jpg" alt="Image"/> </div>
            </div>

          {/* /.sidebar-filter */} 
        </div>
        {/* /.sidebar-module-container */} 
        </>

    )
}
export default Shopby;