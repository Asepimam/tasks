import React from "react";
import { Form, Input, Button } from "antd";
import { apiUrl } from "../helpers/helpers";
import { styled } from "@stitches/react";
const login = apiUrl + "login";

const Auth = () => {
  const onFinish = (values: string) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <WrappFrom>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{
          maxWidth: 400,
          border: "1px solid #ccc",
          padding: 20,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
          //   colon={false}
          style={{ marginBottom: 20 }}
        >
          <div
            style={{
              marginBottom: 10,
              color: "white",
              fontWeight: 600,
              fontSize: 17,
            }}
          >
            User Name
          </div>
          <input style={{ height: 40, borderRadius: 10, width: 300 }} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          style={{ marginBottom: 20 }}
          //   colon={false}
        >
          <div
            style={{
              marginBottom: 10,
              color: "white",
              fontWeight: 600,
              fontSize: 17,
            }}
          >
            Password
          </div>
          <input style={{ height: 40, borderRadius: 10, width: 300 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Button
        href={login}
        style={{
          width: 300,
          height: 40,
          borderRadius: 10,
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: 600,
          fontSize: 17,
          marginBottom: 20,
        }}
      >
        Login Alternatif With IBM Account
      </Button>
    </WrappFrom>
  );
};

export default Auth;

const WrappFrom = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});
