import React, { Component } from 'react';

const userdata=[
    {id:1, name:'Thirupathi', email:'chtirupati@gmail.com', city:"Hyderabad"},
    {id:2, name:'Swathi', email:'chilaganipranavi@gmail.com', city:""}
   ]

class Clickbuttondata extends Component {
    constructor(){
        super();

        this.state = {
            users : []
        }
        console.log("---------ConstructorPart-----------");
    }
    handleApiData=()=>
    {
        this.setState({  users: userdata })
        console.log("---------handleApiData-----------");
    }
    render() {
        console.log("---------RenderPart-----------");
        return (<>
            <div className="container">
            <h3 className="text-center"><button onClick={this.handleApiData}>Click</button><br/></h3>

            <table className="table table-dark w-75 mx-auto my-2">
                       <thead className="table table-light">
                           <tr>
                               <th>ID</th>
                               <th>NAME</th>
                               <th>EMAIL</th>
                               <th>City</th>
                           </tr>
                       </thead>

                      <tbody>
                            {
                                this.state.users.map( (res,index)=>{
                                    return(<tr key={index}>
                                                
                                                    <td>{res.id}</td>
                                                    <td>{res.name}</td>
                                                    <td>{res.email}</td>
                                                    <td>{res.city}</td>
                                            </tr>)
                                })
                            }
                    </tbody>




                   </table>
            </div>
        </>);

       
    }
    componentDidMount(){
        console.log("--------ComponentDidMount-----------");
    }
}

export default Clickbuttondata;