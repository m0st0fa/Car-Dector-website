import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5001/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center gap-4 mb-6">
            <h3 className="text-3xl text-orange-600">Our Services</h3>
            <h2 className="text-5xl">Our Service Area</h2>
            <p><small>the majority have suffered alteration in some form  by injected humour, <br />or randomised words which do not look even slightly believable</small></p>
        </div>
        <div className=" grid md:grid-cols-3  gap-3">
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Service;