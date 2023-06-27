import React, { useEffect, useState } from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import axios from 'axios';
import { Key } from '@mui/icons-material';
import { Container } from 'react-bootstrap';
import { containerClasses } from '@mui/material';
export default function TimeLineFunc() {
const [timeLines,setTimeLines] = useState([])    
 const tlfetch=()=>{
       

        axios.get("http://localhost:4000/TimeLine")
        .then((response)=>{
          setTimeLines(response.data)
        })
      
        
      
      
      }
      useEffect(()=>{
        tlfetch();
      },[])

console.log(timeLines)
useEffect(()=>{
    timeLines.map((timeline)=>(
     
        console.log(`The map props are: ${timeline.id}, ${timeline.image}, ${timeline.title}`)
        
        ))
},[timeLines])
console.log(timeLines)

        
    const launchOptimistic = timeLines.map(elem => (
        {
            id:elem.id,
          image: elem.image,
          title: elem.title
        } 
      ));

    const customizedMarker = (item) => {
        return (
          <div className='justify-content-center text-center  '>
            <span className="flex  w-2rem h-2rem float-right text-white  bg-black">
               {item.id}
            </span>
            </div>
        );
    };

    const customizedContent = (item) => {
        return (
            <div className='bg-black kkk ' >
              <img src={item.image} className='timelineImage pb-1 mb-3' alt="" />
              <div className='col-lg-8 text-white'>
                <h5 className='text-center itemTitle'>{item.title}</h5>
</div>
            </div>
        );
    };
        
    return (
       
        <div className='col-lg-12 ms-5 bg-black container-fluid'>
            <Timeline  value={launchOptimistic} layout="horizontal" align="top" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
        
    )
}
        