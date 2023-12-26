//import { useState } from "react";
import React,{ useState } from "react";
//import React, { useEffect, useState } from "react";

//import React {useState} from "react";
const Contact=()=>{
 const [title,handleTitle]=useState('good morning');
    return(
<div className="akash">
    <h1>{title}</h1>
    <button>click here for change in differentstate</button>
</div>
    )
}
export default Contact;