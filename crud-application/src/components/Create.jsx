import React, {useState} from "react";
import {Link, link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Create = () => {
    const [Id,setId] = useState('');
    const [Name,setName] = useState('');
    const [Age,setAge] = useState('');
    const [Location,setLocation] = useState('');
    const [Phone,setPhone] = useState('');

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Id,Name,Age,Location,Phone);

        const PreviousData = await JSON.parse(localStorage.getItem("Data")) || [];

        const NewData = [...PreviousData,{Id,Name,Age,Location,Phone}];

        localStorage.setItem("Data",JSON.stringify(NewData));

        Navigate("/");
    }
    return(
        <div style={{ display:'flex', justifyContent:'center', marginTop:'10px'}}>
        <div>
        <label>Id:
          <input type="text" placeholder="Enter your id" onChange={(e) => setId(e.target.value)} value={Id}/>
        </label>
      </div>
      <div>
        <label>Name:
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={Name}/>
        </label>
      </div>
      <div>
        <label>Age:
          <input type="text" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)} value={Age}/>
        </label>
      </div>
      <div>
        <label>Location:
          <input type="text" placeholder="Enter your location" onChange={(e) => setLocation(e.target.value)} value={Location}/>
        </label>
      </div>
      <div>
        <label>Phone:
          <input type="text" placeholder="Enter your phone" onChange={(e) => setPhone(e.target.value)} value={Phone}/>
        </label>
      </div>
           
            <Link to={"/create"}>
            <button className="btn btn-success" type="submit" onClick={handleSubmit}>Submit</button>
            </Link>

            <Link to={"/"}>
            <button className="btn btn-secondary" type="submit">Back</button>
            </Link>    
        
    </div>
    )
}
export default Create;