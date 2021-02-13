import React, {setState} from 'react';
import Child from './Child.js';

class Parent extends React.Component {
    constructor() {
        super();
        this.state ={
            name:"Chilagani Thirupathi",
            email:"chtirupati@gmail.com",
            mobile : 9959903333

        }
    }

    handldatachnage=()=>{

        this.setState ({
            name : "Thirupathi Chilagani",
            email : "ch.tirupati@hotmail.com",
            mobile : 7780121551
        })
    }
   
    render() {
        const {name,email,mobile} = this.state;
        return (<>
            <div>
                <h5>Parent class component</h5>
                {name}-{email}-{mobile}
                <br/><br/>
                <button  className="btn btn-primary" onClick = {this.handldatachnage}>Chnage Parent Data</button>

                <Child n={name} e={email} m={mobile} id={1001} city={"Hyderabad"}/>
            </div>
       </> );
    }
}

export default Parent;