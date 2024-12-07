import './CustomEntry.css';

function CustomEntry({changename, changeyear, changedegree, changemajor, changestatement}) {

  const LabelGenerate = () => {
    var username = document.getElementById("Name").value;
    var classOf = document.getElementById("Class").value;
    var degree = document.getElementById("Degree").value;
    var field = document.getElementById("Studies").value;
    var state = document.getElementById("Tagline").value;
    
    if(username != "" && state != "" && degree != "" && field != "")
    {
      changename(username);
      changeyear(classOf);
      changedegree(degree);
      changemajor(field);
      changestatement(state);
    }
    else{
      alert("Please fill out all fields");
    }
  }

  return (
    <div id="userdata">
      <pre>Your Info<br /><br />
    <form> 
      Name : <br /><input id="Name" type="text" placeholder="Name"/><br />
      <br /> 
      Class Of : <br /><select id="Class">
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
      </select><br />
      <br /> 
      Degree : <br /><input id="Degree" type="text" placeholder="Degree Type"/><br />
      <br />
      Major : <br /><input id="Studies" type="text" placeholder="Degree Program"/><br />
      <br />
      A Short Statement : <br /><input id="Tagline" type="text" placeholder="Lux et Veritas"/><br />
      <br />
      <input type="button" value='Generate' id="yale_button" class="button" onClick={LabelGenerate}/>
    </form>
      </pre>
    </div>
  );
}

export default CustomEntry;
