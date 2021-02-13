import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Userview extends Component {
    constructor(props) {
        super();
        this.state = {
            users: {} //empty object for single object data...
        }
        console.log(props);
    }



    render() {

        let { id, name, email, city, course, phone } = this.state.users

        return (<>
            <div className="container">
                <h3 className="text-center"> User Profile View</h3>

                <table className="table">
                    <tbody>

                        <tr>

                            <th>ID</th>
                            <th>{id}</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>{name}</th>
                        </tr>

                        <tr>
                            <th>Email</th>
                            <th>{email}</th>
                        </tr>
                        <tr>
                            <th>CITY</th>
                            <th>{city}</th>
                        </tr>
                        <tr>
                            <th>COURSE</th>
                            <th>{course}</th>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <th>{phone}</th>
                        </tr>



                        <tr>
                            <th>
                                <Link className="btn btn-primary" to="/dynamicdataapi">GOTO BACK</Link>
                            </th>
                            <td>
                                <a onClick={() => window.print()} className="btn btn-info" >PRINT</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>);
    }

    componentDidMount() {

        axios
            .get(`http://localhost:3000/react173/${this.props.match.params.usersviewid}`)
            .then((apiresult) => this.setState({ users: apiresult.data }))
    }
}

export default Userview;