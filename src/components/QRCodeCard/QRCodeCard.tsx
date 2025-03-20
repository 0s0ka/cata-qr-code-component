import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import s from "./QRCodeCard.module.scss";

interface QRCodeCardProps {
  title: string;
  description: string;
}

const QRCodeCard: React.FC<QRCodeCardProps> = ({ title, description }) => {
  // State to store the QR code value
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    // Each new load will generate a new QR code
    const timestamp = new Date().toISOString();
    const newQrValue = `https://www.frontendmentor.io/?timestamp=${timestamp}`;
    setQrValue(newQrValue);
  }, []);

  return (
    <div className={s.card}>
      <div className={s.qr_container}>
        <QRCode
          value={qrValue}
          size={160}
          bgColor="#3685FF"
          fgColor="#FFFFFF"
          className={s.qr_code}
        />
      </div>
      <div className={s.title_container}>
        <h2 className={s.card_title}>{title}</h2>
        <p className={s.card_description}>{description}</p>
      </div>
    </div>
  );
};

export default QRCodeCard;
