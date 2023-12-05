'use client';
import React from "react";
import styles from "./styles.module.css";
import {useState} from "react"
// import { remove } from '@/Redux/Cartslice';
// import { useDispatch,useSelector } from 'react-redux';

export default function Shopping() {
  // const dispatch=useDispatch();
  // const cartitems = useSelector((state)=>state.cart)
  // const handleremove =(id)=>{
  //     dispatch(remove(id))
  // }


  const[count,setCount] = useState(1)
  const handleMinus = () =>{
    if(count-1){
      setCount(count-1)
    }
  }
  const handlePlus = () =>{
    setCount(count+1)
  }
  return (
    <div className={styles.Shopping}>
      <h2>shopping cart</h2>
      <div className={styles.tableBorder}>
        <div className="container mt-4 mb-4">
          <div className={`d-flex justify-content-center row ${styles.box}`}>
            <div  className="col-md-11">
              <div
                className={`d-flex flex-row justify-content-between align-items-center p-2  mt-4 px-3 rounded ${styles.border}`}
              >
                <div className="mr-1 d-flex align-items-center">
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      marginRight: "20px",
                    }}
                  >
                    1.
                  </span>
                  <img
                  style={{position:"relative"}}
                    className={`rounded`}
                    src="/assets/image/product1.png"
                    width="100"
                    height="70"
                  />
                  <div className={styles.priceDiv}>
                   <span className={`font-weight-bold ${styles.spanEdit}`}>
                    Product Name
                  </span>
                      <h5 className={styles.priceEdit}>
                        $60.00
                      </h5>
                  </div>
                </div>


                <div
                  className={`d-flex flex-column align-items-center ${styles.productdetails}`}
                >
                </div>
                 
                  
                <div
                  className={`d-flex flex-row align-items-center ${styles.qty}`}
                >
                  <span onClick={handleMinus} style={{marginRight:"5px"}}>-</span>
                  <h5
                    style={{ color: "#fff" }}
                    className={`text-grey mt-2 mr-1 ml-1`}
                  >
                    {count}
                  </h5>
                  <span onClick={handlePlus}>+</span>
                </div>
                <div className={styles.h5Edit}>
                  <h5 style={{ color: "#fff" }} className="">
                    $20.00
                  </h5>
                </div>
                <div className={styles.remove}>
                  <button className={styles.buttonHover}>remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
