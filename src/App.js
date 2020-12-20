import React, {useState} from "react";
import "./styles.css";

var channels = {
Programming:[
  {name:"Tanay Pratap",for:"From Web Development to Guiding students in their Career path"},
  {name:"Akshay Saini",for:" Checkout this, If you wanna Crack Frond-End Interviews and for JavaScript Fundametals"},
],
Finance:[
  {name:"Shashank Udupa",for:"Personal Finance,Tax,Stock Market"},
  {name:"Rachana Ranade",for: " For everthing related to Stock Market"},
],
Design:[
  {name:"ABNUX",for:"UI/UX Designer"},
],
Technology:[
  {name:"Varun Mayya",for:"Tech, Sales, Neuro-Science, Business"},
]
};
var YtChannels = Object.keys(channels);
export default function App() {

var [currentchannel, setCurrentChannel] = useState("Programming");

  function clickHandler(genre){
    setCurrentChannel(genre);
  }
  return (

    <div className="App">
      <h1>Youtube Channel  Recommendation.</h1>
      <p>For Anyone who wants to skill up or learn something , Checkout this channels for.</p>
      <div className = "buttons">
        {YtChannels.map((genre) =>(
          <button key={genre} onClick={() => clickHandler(genre)}
          style={{
            
            
          }}>
          {genre}
        </button>
        
        ))}
        <hr/>
      </div>
      <h2>{currentchannel}</h2>
      <div className ="centerdiv">
      {Object.keys(channels[currentchannel]).map((gen) => (
        <div className = "container">
          <h3 className ="heading">{channels[currentchannel][gen].name}</h3>
          <h4 className = "info">{channels[currentchannel][gen].for}</h4>
        </div>
      ))}
      </div>
      
    
    </div>
  );
}
