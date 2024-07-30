import React,{useEffect,useState} from "react";
import { useNavigate,useParams } from "react-router-dom";


const Edit = () => {
    const [AllUserSetData] = useState(JSON.parse(localStorage.getItem("Data")) || []);

    const [Id,setId] = useState('');
    const [Name,setName] = useState('');
    const [Age,setAge] = useState('');
    const [Location,setLocation] = useState('');
    const [Phone,setPhone] = useState('');

    const {Id:Aid} = useParams();
    const Navigate = useNavigate();

    useEffect(()=> {
        const currentUser = AllUserSetData?.filter((c)=> c.Id === Aid)?.[0];
        setId(currentUser?.Id);
        setName(currentUser?.Name);
        setAge(currentUser?.Age);
        setLocation(currentUser?.Location);
        setPhone(currentUser?.Phone);
    },[Aid,AllUserSetData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Id,Name,Age,Location,Phone);

        const Index = AllUserSetData.findIndex((e) => e.Id === Aid)

        AllUserSetData.splice(Index,1,{Id,Name,Age,Location,Phone});


        localStorage.setItem("Data",JSON.stringify(AllUserSetData));

        Navigate("/");
    }
    return(
           <div style={{ display:'flex', justifyContent:'center', marginTop:'10px'}}>
           <form onSubmit={handleSubmit}>
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
            <button className="btn btn-success" type="submit">Update</button>
</form>
        </div>

    )
}
export default Edit;