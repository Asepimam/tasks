import { styled } from "@stitches/react";
import { Button } from "antd";

const Home = () => {
  return (
    <>
      <App>
        <h1> Welcome to Taks Project</h1>
        <p> This is a simple to menage your tasks</p>
        <Button type="primary" href="/auth">
          Get Started
        </Button>
      </App>
    </>
  );
};

export default Home;

const App = styled("div", {
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  minWidth: 320,
});
