import { TextField } from "@shopify/polaris";
import { useCallback, useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [value, setValue] = useState("your quote");

  const handleChange = useCallback((newValue) => {
    if (newValue.length <= 100) {
      setValue(newValue);
    }
  }, []);

  props.input(value);
  return (
    <>
      <br />
      <br />
      <TextField
        value={value}
        onChange={handleChange}
        multiline={3}
        autoComplete="off"
      />
      <br />
      {/* <span>Name: {value}</span> */}
      {/* {console.log(value.length)} */}
      <br />
    </>
  );
};

export default Input;
