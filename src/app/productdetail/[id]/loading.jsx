"use client"
import Spinner from "../../components/Spinner/spinner";
import { useState,useEffect } from "react";
import styles from "./styles.module.css"
export default function Loading() {
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 10000); // 10 saniye

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Spinner />
     
    </>
  );
}
