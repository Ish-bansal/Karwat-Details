import React from 'react';
import Product from '../../../compnonents/screens/category/Product';
import ProductData from '../../../compnonents/screens/category/ProductData';
import ProductInner from '../../../compnonents/screens/category/ProductInner';
import ProductInnerData from '../../../compnonents/screens/category/ProductInnerData';


const Section=()=>{
    return(
        <>
        <div className='col-md-9'> 
        {/* ========================================== SECTION – HERO ========================================= */}
        
        <div id="category" className="category-carousel hidden-xs">
          <div className="item">
            <div className="image"> <img src="assets/images/banners/cat-banner-1.jpg" alt="" className="img-responsive"/> </div>
            <div className="container-fluid">
              <div className="caption vertical-top text-left">
                <div className="big-text"> Big Sale </div>
                <div className="excerpt hidden-sm hidden-md"> Save up to 49% off </div>
                <div className="excerpt-normal hidden-sm hidden-md"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </div>
              </div>
              {/* /.caption */} 
            </div>
            {/* /.container-fluid */} 
          </div>
        </div>
        
     
        <div className="clearfix filters-container m-t-10">
          <div className="row">
            <div className="col col-sm-6 col-md-2">
              <div className="filter-tabs">
                <ul id="filter-tabs" className="nav nav-tabs nav-tab-box nav-tab-fa-icon">
                  <li className="active"> <a data-toggle="tab" href="#grid-container"><i className="icon fa fa-th-large"></i>Grid</a> </li>
                  <li><a data-toggle="tab" href="#list-container"><i className="icon fa fa-th-list"></i>List</a></li>
                </ul>
              </div>
              {/* /.filter-tabs */} 
            </div>
            {/* /.col */}
            <div className="col col-sm-12 col-md-6">
              <div className="col col-sm-3 col-md-6 no-padding">
                <div className="lbl-cnt"> <span className="lbl">Sort by</span>
                  <div className="fld inline">
                    <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                      <button data-toggle="dropdown" type="button" className="btn dropdown-toggle"> Position <span className="caret"></span> </button>
                      <ul role="menu" className="dropdown-menu">
                        <li role="presentation"><a href="#">position</a></li>
                        <li role="presentation"><a href="#">Price:Lowest first</a></li>
                        <li role="presentation"><a href="#">Price:HIghest first</a></li>
                        <li role="presentation"><a href="#">Product Name:A to Z</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* /.fld */} 
                </div>
                {/* /.lbl-cnt */} 
              </div>
              {/* /.col */}
              <div className="col col-sm-3 col-md-6 no-padding">
                <div className="lbl-cnt"> <span className="lbl">Show</span>
                  <div className="fld inline">
                    <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                      <button data-toggle="dropdown" type="button" className="btn dropdown-toggle"> 1 <span className="caret"></span> </button>
                      <ul role="menu" className="dropdown-menu">
                        <li role="presentation"><a href="#">1</a></li>
                        <li role="presentation"><a href="#">2</a></li>
                        <li role="presentation"><a href="#">3</a></li>
                        <li role="presentation"><a href="#">4</a></li>
                        <li role="presentation"><a href="#">5</a></li>
                        <li role="presentation"><a href="#">6</a></li>
                        <li role="presentation"><a href="#">7</a></li>
                        <li role="presentation"><a href="#">8</a></li>
                        <li role="presentation"><a href="#">9</a></li>
                        <li role="presentation"><a href="#">10</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* /.fld */} 
                </div>
                {/* /.lbl-cnt */} 
              </div>
              {/* /.col */} 
            </div>
            {/* /.col */}
            <div className="col col-sm-6 col-md-4 text-right">
              <div className="pagination-container">
                <ul className="list-inline list-unstyled">
                  <li className="prev"><a href="#"><i className="fa fa-angle-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li className="next"><a href="#"><i className="fa fa-angle-right"></i></a></li>
                </ul>
                {/* /.list-inline */} 
              </div>
              {/* /.pagination-container */} </div>
            {/* /.col */} 
          </div>
          {/* /.row */} 
        </div>
        <div className="search-result-container ">
          <div id="myTabContent" className="tab-content category-list">
            <div className="tab-pane active " id="grid-container">
              <div className="category-product">
                <div className="row">
                 
               { ProductData.map((newval)=>{
                  return(
                    <Product
                      image={newval.image}
                      classtag={newval.classtag}
                      tag={newval.tag}
                    />
                  )
                })}

                </div>
                {/* /.row */} 
              </div>
              {/* /.category-product */} 
              
            </div>
            {/* /.tab-pane */}
            
            <div className="tab-pane "  id="list-container">
              <div className="category-product">
                
              { ProductInnerData.map((val1)=>{
                  return(
                    <ProductInner
                      image_link={val1.image_link}
                      
                    />
                  )
                })}

              </div>
              {/* /.category-product */} 
            </div>
            {/* /.tab-pane #list-container */} 
          </div>
          {/* /.tab-content */}
          <div className="clearfix filters-container">
            <div className="text-right">
              <div className="pagination-container">
                <ul className="list-inline list-unstyled">
                  <li className="prev"><a href="#"><i className="fa fa-angle-left"></i></a></li>
                  <li><a href="#">1</a></li>
                  <li className="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li className="next"><a href="#"><i className="fa fa-angle-right"></i></a></li>
                </ul>
                {/* /.list-inline */} 
              </div>
              {/* /.pagination-container */} </div>
            {/* /.text-right */} 
            
          </div>
          {/* /.filters-container */} 
          
        </div>
        {/* /.search-result-container */} 
        
      </div>
      {/* /.col */} 
        </>

    )
}
export default Section;