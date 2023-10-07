import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
    const [img,setImg]=useState("");
    const inputEvent =(event)=>{
        const data = event.target.value;
        setImg(data);

    }
  return (
   <>
   <div>
<input class="form-control" type="text" placeholder="serach anything..." value={img} onChange={inputEvent} style={{width: "300px"}} />
<br />
</div>

<div>
    <Sresult val={img}/>
</div>
   </>
  );
}

export default Search;