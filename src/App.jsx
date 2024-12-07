import './App.css';
import { useState } from 'react';
import CustomEntry from './CustomEntry';
import CustomLabel from './CustomLabel';
import CustomTheme from './CustomTheme';

function App() {
  const [user, setuser] = useState("Your Name");
  const [year, setyear] = useState("202X");
  const [degr, setdegr] = useState("Degree");
  const [majr, setmajr] = useState("Major");
  const [stmt, setstmt] = useState("Statement.");

  const [color, setcolor] = useState("#FFFFFF");
  const [border, setborder] = useState("#8E9393");
  const [background, setbackground] = useState("#00356B");
  const [font, setfont] = useState("sans-serif");
  
  return (
    <>
      <h1>Custom Components Practice</h1>
      {/* Add your custom components here */}
      <br />
      <CustomEntry changename={setuser} changeyear={setyear} changedegree={setdegr} changemajor={setmajr} changestatement={setstmt}/>
      <CustomTheme color={color} border={border} background={background} font={font} changeColor={setcolor} changeBorder={setborder} changeBackground={setbackground} changeFont={setfont}/>
      <br />
      <div id="labels">
        <div id="labels_int">
          <CustomLabel theme="light" username={user} year={year} degree={degr} major={majr} statement={stmt}/>
          <CustomLabel theme="dark"  username={user} year={year} degree={degr} major={majr} statement={stmt}/>
          <CustomLabel theme="customizable"  username={user} year={year} degree={degr} major={majr} statement={stmt}/>
        </div>
      </div>
    </>
  );
}

export default App;
