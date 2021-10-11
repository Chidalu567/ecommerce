import React from "react";
import { Checkout } from "../../Checkout";
import { Radio, Button } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Payment = () => {
  const shippingaddr = useSelector((state) => state.shipping.shippingInfo);
  const history = useHistory();
  const [payment, setPayment] = useState("paypal");
  const [loading, setLoading] = useState(false);

  //----------------function-------------//
  /**
   * This function is meant to update the state value and persist value in localStorage
   */
  const handleChange = (e) => {
    setPayment(e.target.value);
    localStorage.setItem("payment", JSON.stringify(payment));
    setLoading(true);
    setTimeout(() => {
      history.push("/make_order");
    }, 9000);
  };

  const customSpin = <LoadingOutlined spin style={{ fontSize: 24 }} />;
  return (
    <>
      {shippingaddr.username ? (
        <div>
          <Checkout
            status="process"
            step1="finish"
            step2="process"
            status="finish"
          />
          <div style={{ position: "relative" }}>
            {loading ? <Spin indicator={customSpin} /> : ""}

            <Radio.Group
              defaultValue="s"
              buttonStyle="solid"
              style={{ margin: "10% 30%" }}
            >
              <Radio.Button value="stripe" onChange={handleChange}>
                Stripe
              </Radio.Button>
              <Radio.Button value="paypal" onChange={handleChange}>
                Paypal
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      ) : (
        history.push("/shipping")
      )}
    </>
  );
};

export default Payment;
