import React from 'react';
import { Link } from 'react-router-dom'








const HotDeals = (props) => {

    return (




        <div className="item">
            <div className="products">
                <div className="hot-deal-wrapper">
                    <div className="image"> <img src={props.imgsrc} alt="" /> </div>
                        <div className="sale-offer-tag"><span>{props.poff} <br/> off</span></div>
                        <div className="timing-wrapper">
                            <div className="box-wrapper">
                                <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                            </div>
                            <div className="box-wrapper">
                                <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                            </div>
                            <div className="box-wrapper">
                                <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                            </div>
                            <div className="box-wrapper hidden-md">
                                <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.hot-deal-wrapper --> */}

                    <div className="product-info text-left m-t-20">
                        <h3 className="name"><a href="detail.html">{props.pname}</a></h3>
                        <div className="rating rateit-small"></div>
                        <div className="product-price"> <span className="price"> {props.dprice} </span> <span
                            className="price-before-discount">{props.oprice}</span> </div>
                        {/* <!-- /.product-price --> */}

                    </div>
                    {/* <!-- /.product-info --> */}

                    <div className="cart clearfix animate-effect">
                        <div className="action">
                            <div className="add-cart-button btn-group">
                                <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i
                                    className="fa fa-shopping-cart"></i> </button>
                                <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                            </div>
                        </div>
                        {/* <!-- /.action --> */}
                    </div>
                    {/* <!-- /.cart --> */}
                </div>
            </div>


    )
}



export default HotDeals














