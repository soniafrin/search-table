import { useState } from "react";
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify';



const TablePage = () =>{
    const handleConfirm = () =>{
        // existingOrderNumbers
        const existingOrderNums = JSON.parse(localStorage.getItem('existingOrderNums')) || [];
    
        // Order number object
        const createdOrderobj = {
            orderNumber,
            table: id,
        }
// add to existing order Number 
        const updatedTypedOrderNum = [...existingOrderNums, createdOrderobj]

    // save back to localStorage
        localStorage.setItem('existingOrderNums', JSON.stringify(updatedTypedOrderNum))

    // clear input
    setOrderNumber("");
    toast.warning(`Order no. ${createdOrderobj.orderNumber} is saved for table No. ${createdOrderobj.table}`)
    }



    const {id} = useParams();
    const [orderNumber, setOrderNumber] = useState("");
    return(
        <div className="w-5/12 mx-auto text-center mt-22 h-80 space-y-5 rounded-xl p-5 shadow-lg bg-[#F5EFE0]">
            <h1 className="font-bold text-xl">Table No. {id}</h1>
            <input
            className="bg-gray-200 border border-gray-500 py-2 px-3 rounded-xl"
            type="number"
            placeholder="Type Your Order Number"
            value={orderNumber}
            onChange={(e)=>setOrderNumber(e.target.value)}
            />
            <p>Order No. {orderNumber}</p>
            <div>
                <button className="bg-[#A3824C] rounded-full px-4 py-2 font-medium text-white" onClick={()=> handleConfirm()}>Confirm</button>
            </div>
        </div>
    )
}

export default TablePage;