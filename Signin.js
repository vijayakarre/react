import styles from'./Signin.module.css'

function Signin(){
   
    return(
        <div className={styles.container}>
            <div className='backgroundpic'>

    <form action="" method="post"> 
        <div className="container my-5 "  >
            <div className="signin page">
            <h1>Sign in</h1>
            <p>Please enter the details to create an account.</p>
            </div>
            <hr/>

         <div className='signin'>
         <label for="firstname" className='text-dark'><b>First Name</b></label>
            <input type="text" placeholder="Enter First Name" name="Firstname" id="firstname" required />

            <br/> 

            <label for="lastname"><b>Last Name</b></label>
            <input type="text" placeholder="Enter Last Name" name="Lastname" id="lastname" required/>
            <br/>


            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="Email" id="email" required/>

            <br/>
            <label for="password"><b>Password</b></label>
            <input type="text" placeholder="Enter Password" name="Password" id="password" required/>

            <br/>
         </div>
            <div className='button sign'>
            <button className="registerbutton btn btn-primary" type="submit" onClick={()=>{
                                    alert("Sign In Sucessfully");
                                }}><strong>Sign in</strong></button>
            </div>

            

        </div>
    </form>
    </div>
    </div>
    )
}
export default Signin;