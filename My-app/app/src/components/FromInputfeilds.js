import { useState } from "react";
import {react} from "react";
const FromInputfeilds=()=>
{
    const[formdata,setFromData]= useState({
        firstname:"",
        lastname:"",
        emialid:"",
    });
   const handleInputChange=(event)=>{
   const[name,value]=event.target;
   }
    return(
        <div className="akash">
            <table>
                <thead>
                    <tr>
                        <td>
                            <h1>Akash bhol</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Akash bhol</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Akash bhol</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Akash bhol</h1>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default FromInputfeilds;