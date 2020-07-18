import React from "react";
import "./App.css";
import { Layout, Divider } from "antd";
import SearchMovies from "./components/searchMovies";

const { Header, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header style={{ textAlign: "center" }}>
          <h1 style={{color: "white"}}>
            What The Movie ?
          </h1>
        </Header>
        <Content>
          <Divider />
          <SearchMovies />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </>
  );
}

export default App;
