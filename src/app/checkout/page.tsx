'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/moving-border";
import Link from 'next/link';
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface OrderDetails {
  products: Product[];
  paymentMethods: string[];
}

const Page = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details');
        const data = await response.json();
        setOrderDetails(data);
      } catch (error) {
        console.error('Error fetching order details:', error);
        // Set orderDetails to null in case of errors
        setOrderDetails(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle case where orderDetails remains null after fetching (e.g., server error)
  if (!orderDetails) {
    return <div>Error fetching order details.</div>;
  }

  return (
    <div className="container mx-auto py-8 mt-20">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orderDetails.products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.title} className="w-full h-auto mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-600">Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Payment Methods</h2>
        <ul>
          {orderDetails.paymentMethods.map((method, index) => (
            <li key={index} className="text-white-600">{method}</li>
          ))}
        </ul>
      </div>
    {/* Summary Section */}
    <div className="mt-8 border p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Summary</h3>
      <p className="text-white-600">
        Total Price: $
        {orderDetails.products.reduce((acc, product) => acc + product.price * product.quantity, 0)}
      </p>
    </div>
    <div className="mt-4 flex justify-center">
          <Link href={"/payment"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold text-lg "
            >
              Payment
            </Button>
          </Link>
        </div>

    </div>
  );
};

export default Page;
