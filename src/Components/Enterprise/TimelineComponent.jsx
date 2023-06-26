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

        const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 1,  },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 2, },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 3, },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 4, }, { status: 'Shipped', date: '15/10/2020 16:15', icon: 3, },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 4, }
    ];
    const launchOptimistic = timeLines.map(elem => (
        {
            id:elem.id,
          image: elem.image,
          title: elem.title
        } 
      ));

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white bg-black" >
               {item.id}
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <div className='bg-black' >
              <img src={item.image} className='timelineImage pb-1 mb-3' alt="" />
              <div className='col-lg-8 text-white'>
                <h5 className='text-center itemTitle'>{item.title}</h5>
</div>
            </div>
        );
    };
        
    return (
       
        <div className='col-lg-12 bg-black container-fluid'>
            <Timeline value={launchOptimistic} layout="horizontal" align="top" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
        
    )
}
        