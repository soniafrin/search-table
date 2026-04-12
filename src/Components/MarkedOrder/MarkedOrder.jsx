import React, { useContext, useEffect, useState } from "react";

const MarkedOrder = () => {
  const [mark, setMarked] = useState([]);

  useEffect(() => {
    const markOrders = JSON.parse(localStorage.getItem("remove")) || [];
    setMarked(markOrders);
  }, []);

  const clearAll =()=>{
      setMarked([])
      localStorage.removeItem("remove")
      
  }

  return (
    <div className="  lg:w-6/12 mx-auto text-center space-y-5 rounded-xl p-5 shadow-lg text-white bg-[#F5EFE0]">
      <button onClick={()=>{clearAll()}} className="btn bg-black">clear All</button>

            <h2 className="text-black">CONFIRM ORDERS</h2>
      <div>
         
          <ol className="space-y-1 flex flex-col items-center justify-center gap-2 list-decimal pl-5 marker:text-blue-500" >
            {mark.map((order, index) => (
              <li
                className="cursor-pointer h-15 bg-[#1F1611] border border-gray-500 py-1 w-96 rounded-xl text-[white] flex items-center justify-center"
                key={index}
              >
               <input type="checkbox" checked readOnly className="mr-5 text-red-500"/> Order No. {order.orderNumber} - Table No. {order.table}
              </li>
            ))}
          </ol>
      </div>
    </div>
  );
};

export default MarkedOrder;
