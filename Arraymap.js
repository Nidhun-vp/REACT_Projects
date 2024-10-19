import React from 'react'

function Arraymap() {
    const Arr =[10,20,30,40,50];
    let sum=0;
    Arr.map((number)=>{

        sum+=number
        return sum;
    })



return (
<div>
  <p>Sum:{sum}</p>

</div>
)
}
export default Arraymap
