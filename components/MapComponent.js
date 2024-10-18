import React from 'react'

function MapComponent() {
    
        const people=[

        { id:1,name:"sam",gender:"male",age:30}, 
        { id:2,name:"John",gender:"male",age:40},
        { id:3,name:"Diya",gender:"female",age:33}, 
        { id:4,name:"Hendry",gender:"male",age:28} 

        ];
   
  return (
    <div>
      {people.map(person=>{
        return(
            <h4>{person.id}<br/>
            {person.name}-{person.age} years old
            </h4>
             )
                         }

               )
      }

    </div>
  )
}

export default MapComponent
//rfce