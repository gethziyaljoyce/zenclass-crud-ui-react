import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Users() {

    const [users, setUsers] = React.useState([]);

    const getUsers = async function () {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
    }

    React.useEffect(() => 
        getUsers(),[]);



    return (
        <>
            <p>Users List</p>
            {users.map((ele) => {
                return (
                    <>
                        <div key={ele} >
                            <div className="container-users">
                            <p>Name :{ele.name}</p>
                            <p>UserName :{ele.username}</p>
                            <p>Address : {ele.address.city}</p>
                            <p>Website : {ele.website}</p>
                            <button><Link to={"/create-user"}>Create User</Link></button>
                            <button><Link to={`/Edit-user/${ele.id}`}>Edit User</Link></button>
                            </div>
                        </div>
                    </>
                );

            })}
        </>
    );
}