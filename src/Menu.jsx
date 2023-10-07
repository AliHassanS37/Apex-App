import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Sresult from './Sresult';



const Menu = () => {
  const [img,setImg]=useState("");
  const inputEvent =(event)=>{
      const data = event.target.value;
      setImg(data);
  }
  return (
   <>
<nav class="navbar navbar-light bg-light">
<Link to="/">About Us</Link>
<Link to="/contact">Contact Us</Link>
<Link to="/contact/name">Name</Link>
<Link to="/search">Search</Link>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search"  placeholder="Search" value={img} onChange={inputEvent} aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="#">Search</button>
  </form>
</nav>
<br />
<div>
     <Sresult val={img}/>
 </div>
 <br />
   </>
  );
}

export default Menu;