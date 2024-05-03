import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard/CoffeeCard";
import { useState } from "react";


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    const[coffees,setCoffees] = useState(data);

    return (
        <div className="my-9">
            <h1 className="text-3xl font-bold">Total data : {data.length}</h1>  
         
            <div className="grid  lg:grid-cols-2 gap-5">

                {
                   data.map((data)=> 

                   <CoffeeCard data={data} 
                   key={data._id}
                   coffees ={coffees}
                   setCoffees ={setCoffees}

                   ></CoffeeCard>)
                }    
            </div>     
        </div>
    );
};

export default Home;