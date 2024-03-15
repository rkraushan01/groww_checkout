// 'pages/PaymentOptions.tsx'
"use client";
import UserContext from "@/context/UserContext";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import UserContextProvider from "@/context/UserContextProvider";

const PaymentOptions = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [totalFee, setTotalFee] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 


  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          "https://groww-intern-assignment.vercel.app/v1/api/order-details"
        );
        const data = await response.json();
        const products = data.products;
        const fee = products.reduce(
          (acc: number, product: any) => acc + product.price * product.quantity,
          0
        );
        setTotalFee(fee);
        setPaymentMethods(data.paymentMethods);
        setIsLoading(false);
      } catch (error) {
        setError(null);
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

  




   
     return (
    <div className="container mx-auto py-8 mt-20">
      <h1 className="text-2xl font-bold mb-4">Choose Payment Method</h1>
      <div className="mb-4">
        <p className="text-lg font-semibold">
          Total Fee: ${totalFee.toFixed(2)}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paymentMethods.map((method, index) => (
          <div key={index} className="border p-4">
            <h2 className="text-lg font-semibold">{method}</h2>
            <p className="text-white-600">
              Pay using {method}
            </p>
            <Link
              className="block mt-4 py-2 px-4 bg-blue-500 text-white rounded-md text-center hover:bg-blue-600 transition duration-300"
             
              href={"/confirmation"}
            >
              Pay ${totalFee.toFixed(2)}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default PaymentOptions;
