// import { Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Dashboard = () =>{
    const [allOrders, setAllOrders] = useState([]);
    // console.log(allOrders);
    const [filter, setFilter] = useState("");
    useEffect(()=>{
        // const interval = setInterval(() =>{
            const existingOrders = JSON.parse(localStorage.getItem('existingOrderNums')) || [];
            setAllOrders(existingOrders);
            // console.log(existingOrders);
        // }, 9000);

        
        // return () => clearInterval(interval)
        
    }, []);

    // filtering order number 
        const filtedtedOrders = filter.length === 0 ? [] : allOrders.filter(order => order.orderNumber.includes(filter))

        // console.log(filtedtedOrders);

const handleMarkOrder = (ind) =>{
    console.log(ind);
    const removeMarkedOrder = allOrders.filter((order, index) => index !== ind)
    setAllOrders(removeMarkedOrder)
    toast.warning("order is removed")
    // console.log(removeMarkedOrder);
}
    return(

        <div className="  lg:w-6/12 mx-auto text-center space-y-5 rounded-xl p-5 shadow-lg bg-[#F5EFE0]">
            <h1 className="text-2xl font-bold">Dashboard Page</h1>
            <input 
            className="bg-gray-200 border border-gray-500 py-2 px-3 rounded-xl"
            type="text"
            placeholder="Search the Order Number...."
            value={filter}
            onChange={(e) => setFilter(e.target.value) }
            />
            <div>
                <ul>
                    {filter.length === 0 ? "" : filtedtedOrders.length === 0 ? ( <p>No matching order</p>) :
                        (filtedtedOrders.map((order, index) => (<li  className="bg-gray-200 border border-gray-500 py-2 px-3 rounded-xl" key={index}>Order No. {order.orderNumber} → Table No. {order.table}</li> ))) 
                    }
                </ul>
            </div>

            <div>
                {allOrders.length === 0 ? (<p>No Orders Yet</p>) :
                (
                    <ul className="space-y-1 flex flex-wrap justify-center gap-2  ">
                        {
                            allOrders.map((order, index )=> (<li onClick={()=>handleMarkOrder(index)} className="cursor-pointer h-15 bg-[#1F1611] border border-gray-500 py-1 w-60 rounded-xl text-[white] flex items-center justify-center" key={index}>
                                 Order No. {order.orderNumber} - Table No. {order.table}</li>))
                        }
                    </ul>
                )}
            </div>  
            
        </div>



    )
}
export default Dashboard;