import React from "react";
import { Steps } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
} from "@ant-design/icons";

//ui
const { Step } = Steps; //get the step from steps

export const Checkout = (props) => {
  return (
    <Steps current={props.step} responsive={true}>
      <Step
        status="finish"
        title="signin"
        description="User must have signed in already"
      />
      <Step
        status={props.step1 ? props.step1 : "wait"}
        title="shipping"
        description="User enters the shipping info"
      />
      <Step
        status={props.step2 ? props.step2 : "wait"}
        title="payment"
        description="User makes payment. The white region signifies the choosen"
      />
      <Step
        status={props.step3 ? props.step3 : "wait"}
        title="Order"
        description="User makes his order"
      />
      <Step
        status={props.step4 ? props.step4 : "wait"}
        title="Order detail"
        description="Order detail"
      />
    </Steps>
  );
}; //javascript function definition
