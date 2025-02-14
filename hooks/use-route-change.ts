// components/RouteListener.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RouteListener() {
  const router = useRouter();
    console.log(333);
    
    useEffect(() => {
      console.log(123);
      
 

    // 监听路由变化

    return () => {
    };
  }, []);

  return null; 
}
