import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function AxiosExample() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";

        axios
            .get(apiUrl)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1 className="h1">Axios Example in React</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table class="table">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">website</th>
                        <th scope="col">company</th>
                    </tr>
                    {data.map((item) => (
                        <>
                            <tr>
                                <th key={item.id} scope="row">
                                    {item.id}
                                </th>
                                <td key={item.id}>{item.name}</td>
                                <td key={item.id}>{item.username}</td>
                                <td key={item.id}>{item.email}</td>
                                <td key={item.id}>{item.address.street}</td>
                                <td key={item.id}>{item.phone}</td>
                                <td key={item.id}>{item.website}</td>
                                <td key={item.id}>{item.company.name}</td>
                            </tr>
                        </>
                    ))}
                </table>
            )}
        </div>
    );
}

export default AxiosExample;
