import React, { Fragment } from "react";
import { Typography, Layout } from "antd";
import "../assets/css/Layout.css";

const { Footer } = Layout;
const { Text } = Typography;

function FooterLayout(props) {
  return (
    <Fragment>
      <Footer style={{ textAlign: "center" }}>
        <Text>Copyright© Universidad Diego Portales 2021</Text>
      </Footer>
    </Fragment>
  );
}

export default FooterLayout;
