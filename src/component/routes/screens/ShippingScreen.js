import React from "react";
import { Checkout } from "../../Checkout";
import { Form, Input, InputNumber, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { shipping } from "../../../Actions/shipping";

const ShippingScreen = () => {
  const userInfo = useSelector((state) => state.user.userInfo); //get the user from reduc store
  const cartItems = useSelector((state) => state.cart.cartItems); //
  const history = useHistory();
  const dispatch = useDispatch();
  //----------------state to hanle the shipping info---------------//
  const [shippingInfo, setShippingInfo] = useState({
    username: "",
    address: "",
    country: "",
    city: "",
    postal: "",
  }); //useState definition

  //--------function-------------//
  /**
   * This function is meant to update the state when the user types in the input field
   */
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShippingInfo({ ...shippingInfo, [name]: value }); //update the state base on the name and value
  }; //javascript function definiton

  //------------function------------//
  /**
   * This function is calls an action when the button is clicked
   * passing the shipping info to the reducer and store
   */
  const handleSubmit = () => {
    if (shippingInfo) {
      dispatch(shipping(shippingInfo)); //dispatch action
      setShippingInfo({
        username: "",
        city: "",
        address: "",
        postal: "",
        country: "",
      });
      history.push("/payment");
    }
  }; //javascript function definition
  return (
    <>
      {userInfo[0] && cartItems.length > 0 ? (
        <div>
          <Checkout step={1} step1="process" />
          <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your FullName!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                name="username"
                value={shippingInfo.username}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Enter your Address" }]}
            >
              <Input
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: "Enter your city location" }]}
            >
              <Input
                name="city"
                value={shippingInfo.city}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: "Enter your Country" }]}
            >
              <Input
                name="country"
                value={shippingInfo.country}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="postal"
              label="Postal"
              rules={[{ required: true, message: "Enter your Postal code" }]}
            >
              <Input
                min={0}
                size="small"
                value={shippingInfo.postal}
                name="postal"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item name="button" wrapperCol={{ offset: 12, span: 12 }}>
              <Button type="primary" onClick={handleSubmit}>
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        history.push("/sign-in")
      )}
    </>
  );
};

export default ShippingScreen;
