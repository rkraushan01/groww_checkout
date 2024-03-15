import React, { createContext, useState, useEffect, ReactNode } from "react";
import UserContext from "./UserContext";

interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface OrderDetails {
    products: Product[];
}

interface UserContextProviderProps {
    children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [totalAmount, setTotalAmount] = useState<number>(0); // Initialize with 0
    const handleUpdateAmount = (newAmount: number) => {
        setTotalAmount(newAmount);
      };
    

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             try {
//                 const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details');
//                 const data: OrderDetails = await response.json();
//                 const total = data.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
//                 setTotalAmount(total);
//             } catch (error) {
//                 console.error('Error fetching order details:', error);
//                 setTotalAmount(0); // Handle error by setting totalAmount to 0
//             }
//         };

//         fetchOrderDetails();
//     }, []);
// console.log(totalAmount)
    return (
        <UserContext.Provider value={{totalAmount }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
