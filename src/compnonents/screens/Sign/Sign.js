import React, { useState } from 'react';
// import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import Validation from '../../../compnonents/screens/Sign/Validation';
import Validation1 from '../../../compnonents/screens/Sign/Validation1';

const Sign =()=>{

	// const {register,handleSubmit,errors}= useForm()
	const [values,setValues]= useState({
		email:"",
		password:"",

	});
	const [errors, setErrors]=useState({});

	const HandleChange=(event)=>{
		setValues({
			...values,
			[event.target.name]:event.target.value,

		});
	}

	const HandleFormSubmit=(event)=>{
		event.preventDefault();
		setErrors(Validation(values));
	}

	const [values1,setValues1]= useState({
		email1:"",
		fullname:"",
		number:"",
		password1:"",
		confirmpass:"",
	});
	const [errors1, setErrors1]=useState({});

	const HandleChange1=(event)=>{
		setValues1({
			...values1,
			[event.target.name]:event.target.value,

		});
	}
	
	const HandleCreateSubmit=(event)=>{
		event.preventDefault();
		setErrors1(Validation1(values1));
	}


    return(<>
        <div className="breadcrumb">
	    <div className="container">
		<div className="breadcrumb-inner">
			<ul className="list-inline list-unstyled">
				<li><Link to="home.html">Home</Link></li>
				<li className='active'>Login</li>
			</ul>
		</div>
	</div>
</div>


<div className="body-content">
	<div className="container">
		<div className="sign-in-page">
			<div className="row">	
				<div className="col-md-6 col-sm-6 sign-in">
				<h4 className="">Sign in</h4>
				<p className="">Hello, Welcome to your account.</p>
				<div className="social-sign-in outer-top-xs">
					<Link to="#" className="facebook-sign-in"><i className="fa fa-facebook"></i> Sign In with Facebook</Link>
					<Link to="#" className="twitter-sign-in"><i className="fa fa-twitter"></i> Sign In with Twitter</Link>
				</div>
				<form  className="register-form outer-top-xs" role="form">
					<div className="form-group">
						<label className="info-title" for="exampleInputEmail1">Email Address <span>*</span></label>
						<input type="email"  className="form-control unicase-form-control text-input" 
						id="exampleInputEmail1" name="email" value={values.email} onChange={HandleChange}/>
						{errors.email && <span className="error">{errors.email}</span>}
					</div>
					<div className="form-group">
						<label className="info-title" for="exampleInputPassword1">Password <span>*</span></label>
						<input type="password" className="form-control unicase-form-control text-input" 
						id="exampleInputPassword1"  name="password" value={values.password} onChange={HandleChange}/>
						{errors.password && <span className="error">{errors.password}</span>}
					</div>
					<div className="radio outer-xs">
						<label>
							<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>Remember me!
						</label>
						<Link to="#" className="forgot-password pull-right">Forgot your Password?</Link>
					</div>
					<button type="submit" onClick={HandleFormSubmit} className="btn-upper btn btn-primary checkout-page-button">Login</button>
				</form>					
				</div>


			<div className="col-md-6 col-sm-6 create-new-account">
				<h4 className="checkout-subtitle">Create a new account</h4>
				<p className="text title-tag-line">Create your new account.</p>
				<form className="register-form outer-top-xs" role="form">
					<div className="form-group">
						<label className="info-title" for="exampleInputEmail2">Email Address <span>*</span></label>
						<input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2"
						name="email1" value={values1.email1} onChange={HandleChange1}  />
						{errors1.email1 && <span className="error">{errors1.email1}</span>}
					</div>
					<div className="form-group">
						<label className="info-title" for="exampleInputEmail1">Name <span>*</span></label>
						<input type="text" className="form-control unicase-form-control text-input" id="exampleInputEmail1"
						name="fullname" value={values1.fullname} onChange={HandleChange1} />
						{errors1.fullname && <span className="error">{errors1.fullname}</span>}
					</div>
					<div className="form-group">
						<label className="info-title" for="exampleInputEmail1">Phone Number <span>*</span></label>
						<input type="text" className="form-control unicase-form-control text-input" id="exampleInputEmail1" 
							name="number" value={values1.number} onChange={HandleChange1} />
							{errors1.number && <span className="error">{errors1.number}</span>}
					</div>
					<div className="form-group">
						<label className="info-title" for="exampleInputEmail1">Password <span>*</span></label>
						<input type="password" className="form-control unicase-form-control text-input" id="exampleInputEmail1"
						name="password1" value={values1.password1} onChange={HandleChange1} />
						{errors1.password1 && <span className="error">{errors1.password1}</span>}
					</div>
					<div className="form-group">
						<label className="info-title" for="exampleInputEmail1">Confirm Password <span>*</span></label>
						<input type="password" className="form-control unicase-form-control text-input" id="exampleInputEmail1"
						name="confirmpass" value={values1.confirmpass} onChange={HandleChange1}  />
						{errors1.confirmpass && <span className="error">{errors1.confirmpass}</span>}
					</div>
					<button type="submit" onClick={HandleCreateSubmit} className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
				</form>
			</div>	
		</div>
	</div>


		
<div id="brands-carousel" className="logo-slider wow fadeInUp">

		<div className="logo-slider-inner">	
			<div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
				<div className="item m-t-15">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item m-t-10">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>

				<div className="item">
					<Link to="#" className="image">
						<img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
					</Link>	
				</div>
		    </div>
		</div>
	
</div>
</div>
</div>
</>
)
}

export default Sign;
