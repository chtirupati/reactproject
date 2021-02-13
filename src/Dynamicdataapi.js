import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dynamicdataapi extends Component {
    constructor(props) {
        super();
        this.state = {
            users: []
        }

        console.log("********constructor*********");
        console.log(props);
    }

    //get all api data

    HandleReadApiData = async () => {

        await axios
            .get('http://localhost:3000/react173')
            .then((apiresult) => this.setState({ users: apiresult.data }))
    }
    //Delete particular record
    HandlingDeleteData = async (id) => {

        if (window.confirm(`Do you want Particular Record?${id}`)) {
            await axios.delete(`http://localhost:3000/react173/${id}`)

            //Update left data from API, after the delete the data
            this.HandleReadApiData();
        }
    }

    render() {
        console.log("********Render**********");

        return (<>

            <div className="container py-5">
                <h3 className="py-3 text-center">
                    AXIOS RESTAPI CALLS.....

                     </h3>

                <table className="table table-dark mx-auto my-2">
                    <thead className="thead-light">
                        <tr>
                            <th>SlNO</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CITY</th>
                            <th>COURSE</th>
                            <th>PHONE</th>


                            <th colSpan="3">ACTION</th>
                        </tr>
                    </thead>

                    {/*  step-4 */}
                    <tbody>
                        {
                            this.state.users.map((res, index) => {
                                return (<tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.city}</td>
                                    <td>{res.course}</td>
                                    <td>{res.phone}</td>


                                    <td> <Link to={`${this.props.match.path}/view/${res.id}`} className="btn btn-primary text-white">View</Link></td>
                                    <td> <Link to={`${this.props.match.path}/edit/${res.id}`} className="btn btn-primary text-white">Edit</Link></td>
                                    <td> <button onClick={() => this.HandlingDeleteData(res.id)} className="btn btn-danger text-white">Delete</button></td>

                                </tr>)
                            })
                        }
                    </tbody>
                </table>


            </div>
        </>);
    }

    componentDidMount() {

        console.log("********ComponentDiidMount*******");
        this.HandleReadApiData();
        //axios is two different function 1. get and  2. then -->output (result statment)purpose
        //apiresult my own argument nad data is  keyword
    }

}

export default Dynamicdataapi;