import './CustomTheme.css';

function CustomTheme({color, border, background, font, changeColor, changeBorder, changeBackground, changeFont}) {
  const Theme = () => {
    var col = document.getElementById("Color").value;
    var fon = document.getElementById("Font").value;
    var bor = document.getElementById("Border").value;
    var bac = document.getElementById("Background").value;

    var border = "5px solid" + bor;

    let Reg_Exp = /^#[0-9A-F]{6}$/i;
    
    if(Reg_Exp.test(col) && Reg_Exp.test(bor) && Reg_Exp.test(bac))
    {
      changeColor(col);
      changeBorder(bor);
      changeBackground(bac);
      changeFont(fon);

      var element =  document.getElementById("customizable");
      element.style["backgroundColor"] = bac;
      element.style["color"] = col;
      element.style["fontFamily"] = fon;
      element.style["borderLeft"] = border;
    }
    else{
      alert("Please ensure all color fields are entered in the format '#000000'")
    }
  }

  return (
    <div id="theme">
      <pre>Custom Theme<br /><br />
    <form> 
      Text Color : <br /><input id="Color" type="text" placeholder="#FFFFFF"/><br />
      <br /> 
      Font Type : <br /><select id="Font">
        <option value="sans-serif">Sans-serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">monospace</option>
      </select><br />
      <br /> 
      Side Bar Color : <br /><input id="Border" type="text" placeholder="#8e9393"/><br />
      <br /> 
      Background Color : <br /><input id="Background" type="text" placeholder="#00356B"/><br />
      <br />
      <input type="button" value='Generate' id="theme_button" class="button" onClick={Theme}/>
    </form>
      <p id="paragraph">Customizable label 
        <br />generated with: <br />
        <br />Text color {color},
        <br />Border color {border},
        <br />Background {background},
        <br />Font type {font}.
      </p>
      </pre>
    </div>
  );
}

export default CustomTheme;
