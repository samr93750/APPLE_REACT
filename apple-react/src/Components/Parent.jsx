import React from 'react'
import Header from "./Header";
import Alert from "./Alert";
import Section1 from "./Sec1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./Footer";
import YouTube from "./Youtube";
import News from "./News";
import Top from './Top';
const Parent = () => {
  return (
    <div>
     {/* <Header /> */}
     {/* <Top /> */}
      <Alert />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <YouTube /> */}
      <News />
    
    </div>
  );
}

export default Parent
