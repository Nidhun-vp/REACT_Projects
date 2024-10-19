import React from 'react'

function EvenComponent() {
    const Arr =[7,20,6,40,51];
    let  result=''
    Arr.map((number)=>{

        if(number%2==0)
        {
            result=result+number+', '
            
        }
        return result;
    })



return (
<div>
  <p>Even Array:{result}</p>


</div>
)
}
export default EvenComponent
