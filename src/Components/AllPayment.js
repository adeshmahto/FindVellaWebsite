import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Confirmation from './Confirmation';

function AllPayment() {

    const [pay, setPay] = useState({});
    const getAllpayment = () => {
        axios.get('/payments').then((response) => {
            setPay(response.data);
            console.log("success")
        }, (error) => {
            console.log(error)
        })
    }
   console.log(pay[0])
    useEffect(()=>{
        getAllpayment()

    },1)

    return (
        <div>
            <h1>get all payment detail</h1>
            {
              pay.length>0?pay.map((i)=>(
                    <Confirmation key={i.id} payment={i}/>
              )

                ):"No payment"
            }

        </div>
    )
}

export default AllPayment