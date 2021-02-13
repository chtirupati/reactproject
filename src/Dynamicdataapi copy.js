import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Dynamicdataapi extends Component {
    constructor(props){
        super();
        this.state ={
                users:[]
        }
        
        console.log("********constructor*********");
        console.log(props);
    }
  
 //Delete particular record
    HandlingDeleteData =()=>{
        window.confirm("Do you want Particular Record?")
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
                                this.state.users.map( (res,index)=>{
                                    return(<tr key={index}>
                                                    
                                                    <td>{res.id}</td>
                                                    <td>{res.name}</td>                                                   
                                                    <td>{res.email}</td>
                                                    <td>{res.city}</td>
                                                    <td>{res.course}</td>
                                                    <td>{res.phone}</td>
                                                   
                                                    <td> <Link to={`${this.props.match.path}/${res.id}`}  className="btn btn-primary text-white">View</Link></td>
                                                    <td> <button className="btn btn-warning text-white">Edit</button></td>
                                                    <td> <button onClick={this.HandlingDeleteData} className="btn btn-danger text-white">Delete</button></td>
                                                
                                            </tr>)
                                })
                            }
                    </tbody>
                   </table>
                    
                
                </div>
        </>);
    }

    componentDidMount(){

        console.log("********ComponentDiidMount*******");
        axios
        .get('http://localhost:3001/react173')
        .then((apiresult)=> this.setState({users : apiresult.data}))
        //axios is two different function 1. get and  2. then -->output (result statment)purpose
        //apiresult my own argument nad data is  keyword
    }

}

export default Dynamicdataapi;