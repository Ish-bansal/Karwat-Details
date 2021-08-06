const Validation1 =(values1)=>{

    let errors1={};

    if(!values1.email1){
        errors1.email1 = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(values1.email1)){
        errors1.email1 = "Email is invalid";
    }

    if(!values1.fullname){
        errors1.fullname = "Name is required";
    }

    if(!values1.number){
        errors1.number = "Number is required";
    }
    else if(values1.number.length <10 ){
        errors1.number = "Number is Invalid";
    }

    if(!values1.password1){
        errors1.password1 = "Password is required";
    }else if(values1.password1.length < 5){
        errors1.password1 = "Password must be more than five characters";
    }
    if(!(values1.confirmpass == values1.password1) ){
        errors1.confirmpass = "Password does not match";
    }


    return errors1;
}

export default Validation1;