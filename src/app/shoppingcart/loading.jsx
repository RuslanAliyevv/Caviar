"use client"
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner/spinner";

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // 2 saniye sonra spinner'ı kaldır
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 2000);

    // useEffect temizleme fonksiyonu
    return () => clearTimeout(timer);
  }, []); // Bu useEffect sadece bir kere çalışsın

  return showSpinner ? (
    // Spinner'ı göster
    <Spinner />
  ) : (
    // Spinner'ı gösterme, gerçek içeriği göster
    <div>
      <h1>Sayfa Yüklendi</h1>
      {/* Gerçek içeriğiniz buraya gelecek */}
    </div>
  );
}