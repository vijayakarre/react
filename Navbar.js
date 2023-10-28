import { Link } from 'react-router-dom';
import  './Navbar.css'

function Navbar(){

    return(
         
      <div className="bg-dark navbar">
      <nav className="navbar navbar-expand-lg navbar-light ">
  {/* <a className="navbar-brand" ><b>Navbar</b></a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active">
        <Link className="nav-link " to={'/Products'} ><b>Home</b> <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={'/Services'} ><b>Services</b> <span className="sr-only"></span></Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link"  to={'/Register'}><b>Register</b></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/Signin'} ><b>sign in</b></Link>
      </li>
    </ul>
  </div>
</nav>
</div>


)
    

}
export default Navbar;