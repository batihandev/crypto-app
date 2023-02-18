import { Layout, Typography, Space } from "antd";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}
