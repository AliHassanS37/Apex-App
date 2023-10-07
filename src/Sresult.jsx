import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Sresult = (props) => {
    const image=`https://source.unsplash.com/600x500/?${props.val}`;
  return (
   <>
<div>

{/* <img src={image}></img> */}
<div class="card" style={{width: "20rem"}}>
  <img src={image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
   </>
  );
}

export default Sresult;