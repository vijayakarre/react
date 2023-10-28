import React from "react";
import {useForm} from "react-hook-form";
function Register(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const registerdata=(data)=>{

    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4 mx-auto my-5">
                <h1>Register</h1>
                <p>Please enter the details to create an account.</p>
                <hr/>
                
                    
                <form onSubmit={handleSubmit(registerdata)}>
                <div className="mb-3">
                    <label for="First Name" className="form-label">First Name<span className="text-danger">*</span></label>
                    <input type="text"  className="form-control"placeholder="Enter First Name" name="Firstname" id="First Name"{...register('First Name',{required:true})}/>
                    <p className="text-danger">{errors['First Name'] && 'Please Enter First Name'}</p>
                </div>
                <div className="mb-3">
                    <label for="Middle Name" className="form-label">Middle Name<span className="text-danger">*</span></label>
                    <input type="text"  className="form-control"placeholder="Enter Middle Name" name="Middle Name" id="Middle Name"{...register('Middle Name',{required:true})}/>
                    <p className="text-danger">{errors['Middle Name'] && 'Please Enter Middle Name'}</p>
                </div>
                <div className="mb-3">
                    <label for="Last Name" className="form-label">Last Name<span className="text-danger">*</span></label>
                    <input type="text"  className="form-control"placeholder="Enter Last Name" name="Last Name" id="Last Name"{...register('Last Name',{required:true})}/>
                    <p className="text-danger">{errors['Last Name'] && 'Please Enter Last Name'}</p>
                </div>
                <div className="mb-3">
                    <label for="Email" className="form-label">Email<span className="text-danger">*</span></label>
                    <input type="email"  className="form-control"placeholder="Enter Email" name="Email" id="Email"{...register('Email',{required:true})}/>
                    <p className="text-danger">{errors['Email'] && 'Please Enter Email'}</p>
                </div>
                <div className="mb-3">
                    <label for="Phone No" className="form-label">Phone No<span className="text-danger">*</span></label>
                    <input type="text"  className="form-control"placeholder="Enter Phone No" name="Phone No" id="Phone No"{...register('Phone No',{required:true})}/>
                    <p className="text-danger">{errors['Phone No'] && 'Please Enter Phone No'}</p>
                
                </div>

                <button type="submit " className="btn btn-primary">Submit</button>

                </form>

                </div>
            </div>
             
        </div>
    
    )
}
export default Register;