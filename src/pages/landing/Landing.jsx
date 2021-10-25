import React from "react";
import LogHeader from "../../component/logheader/Header";
import "./landing.css";
export default function Landing() {
  return (
    <div>
      <LogHeader />
      <h1 className="moto">Earn Up</h1>
      <p className="moto-phrase">
        Makeing income tracking for freelancers easier
      </p>
      <div className="shocase-con">
        <div className="line f1">
          <p className="fname">Concordia Inc</p>
          <p className="fprice">$2,500.00</p>
          <p className="frecipt">Documents</p>
        </div>
        <div className="line f2">
          <p className="fname">Lasting Enterprices</p>
          <p className="fprice">$4000.00</p>
          <p className="frecipt">Documents</p>
        </div>
        <div className="line f1">
          <p className="fname">Rick's Motor Repair</p>
          <p className="fprice">$30.00</p>
          <p className="frecipt">Documents</p>
        </div>
        <div className="line f2">
          <p className="fname">Prairie Cafe</p>
          <p className="fprice">$5000.00</p>
          <p className="frecipt">Documents</p>
        </div>
      </div>
    </div>
  );
}
