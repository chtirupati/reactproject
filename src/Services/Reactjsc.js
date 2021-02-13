import axios from 'axios';
import React, { Component } from 'react';

class Reactjsc extends Component {
    constructor(){
        super();
        this.state = {
            albums:[]
        }
    }
    render() {
        return (<>
            <div className="container">
                <h3 className="text-center">Albums List Api[https://jsonplaceholder.typicode.com/comments]</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    
                    this.state.albums.map((res,index)=>{
                        return(
                            <tr key={index}>
                                <td>{res.userId}</td>
                                <td>{res.id}</td>
                                <td>{res.title}</td>
                            </tr>



                        )


                    })

                    
                }
                    </tbody>
                </table>
                
            </div>
        </>);
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums').then((albumresult)=> this.setState({albums:albumresult.data}))
    }
}

export default Reactjsc;