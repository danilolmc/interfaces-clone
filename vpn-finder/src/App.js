import { Header } from "./components/header";

import "./App.scss";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Card } from "./components/card";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Menu } from "./components/menu";

import { motion } from 'framer-motion';

function App() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: .15,
        delayChildren: .3,
    
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1 , 
      y: 0,
      transition: {
        
        ease: "easeInOut",
        duration: .5
      }
    }
  }


  const [cardData, setCardData] = useState([
    {
      title: "Web Proxy",
      text: "360 privacy protection / Hide your IP and surf anonymously"
    }
  ]);


  return (
    <div className="App">
      <nav>
        <header>
          <h1><span>vpn</span>Finder</h1>
        </header>
        <Menu />
      </nav>
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
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="cards-container">

            <motion.div variants={item}>
              <Card as={motion.div} cardData={cardData[0]}>
                <div className="input-card">
                  <Input placeholder="Search" inputContext="card">
                    <BiSearch />
                  </Input>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card as={motion.div} variants={item} cardData={cardData[0]}>
                <div className="input-card">
                  <Input placeholder="Test" inputContext="card">
                    <BiSearch />
                  </Input>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card as={motion.div} variants={item} cardData={cardData[0]}>
                <div className="input-card">
                  <Button typeButton="textButton">Ip Lookup</Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
