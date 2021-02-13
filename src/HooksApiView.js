import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const HooksApiView = (props) => {
    //State management
    const [users, setUsers] = useState({
        id: '',
        name: '',
        email: '',
        location: '',
        course: '',
        phone: ''
    });


    //Takes parameter value from URL
    let { hooksid } = useParams();


    //RESTAPI_CALLS --> .get(`http://localhost:3000/react173/${props.match.params.hooksid}`)
    useEffect(() => {
        axios
            .get(`http://localhost:3000/react173/${hooksid}`)
            .then((apiresult) => setUsers(apiresult.data))
    }, [])

    return (<>

        <div className="container py-5">

            <table className="table table-dark w-50 mx-auto my-2">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>{users.id}</td>
                    </tr>

                    <tr>
                        <th>NAME</th>
                        <td>{users.name}</td>
                    </tr>


                    <tr>
                        <th>EMAIL</th>
                        <td>{users.email}</td>
                    </tr>

                    <tr>
                        <th>City</th>
                        <td>{users.city}</td>
                    </tr>

                    <tr>
                        <th>COURSE</th>
                        <td>{users.course}</td>
                    </tr>

                    <tr>
                        <th>PHONE</th>
                        <td>{users.phone}</td>
                    </tr>

                    <tr>
                        <th>
                            <Link className="btn btn-primary" to="/hooksApi">GOTO BACK</Link>
                        </th>

                        <td>
                            <button onClick={() => window.print()} className="btn btn-success" >PRINT</button>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>

    </>)
}


export default HooksApiView