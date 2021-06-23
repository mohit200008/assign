import React from "react";

import Preview from './Components/Preview';
import { makeStyles, TextField } from "@material-ui/core";
import RadioF from "./Components/Radio";
import Select from './Components/Select';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    marginTop: 50,
    border: '1px solid red',
    alignItems: "center",
    display: "grid",
    placeItems: "center",
    margin: '0 50',
    marginRight: "50vw"
  },
  preview: {
    marginTop: -340,
    position:"fixed",
    border: '1px solid red',
    alignItems: "center",
    display: "grid",
    placeItems: "center",
    margin: '0 50',
    marginLeft: "50vw"
  }
})









function App() {
  const classes = useStyle();
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [value, setValue] = React.useState('');
  const [text, setText] = React.useState('');

  const handleSubmit=(e)=> {
    alert('Your form has been submitted sucessfully')
   

    
  }


  return (

    <div >
      <div className={classes.container}>
        <h1>Form</h1>

        <TextField value={name} onChange={(event) => setName(event.target.value)} id="standard-basic" label="Enter something" />
        <br /> <br />

        <RadioF value={value} setValue={setValue} />
        <Select age={age} setAge={setAge} value={value} />
        <br /><br />

        <TextareaAutosize rowsMax={4} placeholder="Enter your suggestions" value={text} onChange={(event) => setText(event.target.value)} />
        <br /><br />
        <div style={{ display: "flex", margin: "10px" }}>
          
          
        </div>
      </div>
      <div className={classes.preview}>
         <h1>Preview of your data</h1>
        <Preview value={value} name={name} age={age} text={text} />
        <Button onClick={handleSubmit} style={{ marginLeft: "10px" }} variant="contained" color="primary">
            Submit
          </Button>
      </div>



    </div>


  );
}

export default App;
