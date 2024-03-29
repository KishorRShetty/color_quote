import { useState } from "react";
import "./App.css";
import Color from "./components/input_color/Color";
import Input from "./components/input_color/Input";
import Png from "./components/png/Png";

function App() {
  const [inputText, setInputText] = useState();
  const [inputColor, setInputColor] = useState({});

  const getInputText = (text) => {
    // setInputText(text);
    //*****WRAP useState VARIABLE INSIDE setTimeout WITH 0 TIME AS BELOW.*****
    setTimeout(() => setInputText(text), 0);
  };

  const getColorCode = (color) => {
    // setInputColor(color);
    // console.log(color);
    //*****WRAP useState VARIABLE INSIDE setTimeout WITH 0 TIME AS BELOW.*****
    setTimeout(() => setInputColor(color), 0);
  };

  return (
    <>
      <div className="App">
        Color Quote
        <div className="input_color">
          <div className="text_input">
        <Input input={getInputText} />
        </div>
        {/* 100 chars long */}
        <Color colorCode={getColorCode} />
        </div>
        <Png color={inputColor} input={inputText} />
      </div>
      {/* <span>text inside App: {inputText}</span> */}
      {/* {`hue: ${inputColor.hue} brightness: ${inputColor.brightness} saturation: ${inputColor.saturation} alpha: ${inputColor.alpha}`} */}
    </>
  );
}

export default App;
