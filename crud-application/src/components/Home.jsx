import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { Table,Button } from "react-bootstrap";

const Home = () => {
    const [data,setData] = useState([]);

    useEffect(()=> {
        debugger
        setData(JSON.parse(localStorage.getItem("Data")));
    },[data]);

    const handleDelete = async (Id) => {
        const updatedData = data.filter((e) => e.Id !== Id);
        setData(updatedData);
        localStorage.setItem("Data",JSON.stringify(updatedData));
    }
    return(
    <div style={{margin:"10rem"}}>
    <Link to={"/create"}>
        <Button size="lg" className="btn btn-success">Create</Button>
    </Link><br/>
    {  data?.length > 0 ? (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Location</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e) => {
            return(
              <tr key={e.Id}>
                <td>{e.Id}</td>
                <td>{e.Name}</td>
                <td>{e.Age}</td>
                <td>{e.Location}</td>
                <td>{e.Phone}</td>
                <td>
                
                <Link to={`/edit/${e.Id}`} >
                  <Button className="btn btn-primary">Edit</Button>&nbsp;
                  </Link>
                  <Button className="btn btn-danger" onClick={() => handleDelete(e.Id)}>Delete</Button>
                </td>
              </tr>
            )
          })
        }
    
      </tbody>
    </Table>
    ) : (  
          <h1 className="text-center">No User available!</h1>
    )}
    </div>
    );
}

export default Home;