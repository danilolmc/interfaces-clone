import { Header } from "./components/header";

import "./App.scss";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

function App() {

  const [cardData, setCardData] = useState([
    {
      title: "Web Proxy",
      text: "360 privacy protection / Hide your IP and surf anonymously"
    }
  ]);


  return (
    <div className="App">
      <nav></nav>
      <main>
        <Header></Header>
        <section className="middle-content">
          <header>
            <div className="ips">
              <label>My Ip address</label>
              <h1>123.57.329.168</h1>
              <div className="input-container">
                <Input bgColor="#3740DC" placeholder="iPv4, iPv6 or Domanin name" />
                <Button typeButton="textButton">Ip Lookup</Button>
              </div>
            </div>
            <div className="data-ip">
              <span>
                <label>Country</label>
                <h2>Ukraine</h2>
              </span>
              <span>
                <label>City</label>
                <h2>Kharviv</h2>
              </span>
              <span>
                <label>State/Province</label>
                <h2>Kharvivs'ka Oblast'</h2>
              </span>
            </div>
          </header>
          <div className="cards-container">
            <Card cardData={cardData[0]}>
              <div className="input-card">
                <Input placeholder="Search" inputContext="card">
                  <BiSearch />
                </Input>
              </div>
            </Card>
            <Card cardData={cardData[0]}>
              <div className="input-card">
                <Input placeholder="Test" inputContext="card">
                  <BiSearch />
                </Input>
              </div>
            </Card>
            <Card cardData={cardData[0]}>
              <div className="input-card">
                  <Button typeButton="textButton">Ip Lookup</Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
