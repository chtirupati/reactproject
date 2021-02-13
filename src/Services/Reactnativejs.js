import Axios from 'axios';
import React, { Component } from 'react';

class Reactnativejs extends Component {
   constructor(){
      super()
      this.state ={
         photos:[]
      }

      
   }
   render() {
      return (<>
         <div className="container">
            <h3 className="text-center">Photo with API Calling [https://jsonplaceholder.typicode.com/photos]</h3>
               <table className="table">
                  <thead>
                     <tr>
                        <th>albumId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                     </tr>
                  </thead>
                  <tbody>
                  {
               this.state.photos.map((res,index)=>{
                  return(
                     <tr key={index}>
                        <td>{res.albumId}</td>
                        <td>{res.id}</td>
                        <td>{res.title}</td>
                        
             
                        <td><img src={`${res.url}`} style={{height: '50px'}} alt="photos"/></td>
                        <td><img src={`${res.thumbnailUrl}`} style={{height: '50px'}} alt="photos"/></td>
                       
                     </tr>
                  )
               })
            }
                  </tbody>
               </table>
         </div>
     </> );
   }

   componentDidMount(){

      Axios.get('https://jsonplaceholder.typicode.com/photos').then((photosdisplay)=>this.setState({photos:photosdisplay.data}))
   }
}

export default Reactnativejs;