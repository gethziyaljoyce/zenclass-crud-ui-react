import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profiles() {

    const [profiles, setProfiles] = React.useState([]);

    const getProfiles = async function () {
        const { data } = await axios.get("https://611f264a9771bf001785c738.mockapi.io/users");
        setProfiles(data);
    }


    React.useEffect(() =>
        getProfiles(), []);

    return (
        <>
            <p>profiles List</p>
            <div className="card">
                {profiles.map((ele) => {
                    return (
                        <>
                            <div key={ele.id} className="container-profiles">

                                <p><b>Name:</b>{ele.name}</p>

                                <p>
                                    <img src={ele.avatar} alt="img" />
                                </p>
                                <button><Link to={"/create-profile"}>Create Profile</Link></button>
                                <button><Link to={`/Edit/${ele.id}`}>Edit Profile</Link></button>

                            </div>
                        </>
                    );

                })}
            </div>
        </>
    );
}