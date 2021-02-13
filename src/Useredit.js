import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Useredit extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            email:'',
            city:'',
            course:'',
            phone:''

        }
    }


     //name_input
     HandleNameInput=(e)=>
     {
         this.setState({ name:e.target.value  })        
     }

      //email_input
    HandleEmailInput=(e)=>
    {
        this.setState({ email: e.target.value })
    }

    //city_input
    HandleCityInput=(e)=>
    {
        this.setState({ city: e.target.value })
    }

    //course_input
    HandleCourseInput=(e)=>
    {
           this.setState({ course: e.target.value })
    }


    //phone_input
    HandlePhoneInput=(e)=>
    {
        this.setState({ phone: e.target.value })
    }
     

    

//submit_button
HandleSubmitForm=(e)=>
{

    e.preventDefault();
    
    const formsdata={
        'name':this.state.name,
        'email':this.state.email,
        'city':this.state.city,
        'course':this.state.course,
        'phone':this.state.phone
    }

    //JSON.stringify()

//alert( JSON.stringify(formsdata) );

axios
.put(`http://localhost:3000/react173/${this.props.match.params.usersviewid}`, formsdata)
.then( ()=>this.props.history.push('/dynamicdataapi') )



}
    render() {
        return (<>
            <div className="container"> 
                <h3 className="text-center">User Edit Profile</h3>
                    <form onSubmit={ this.HandleSubmitForm.bind(this) }>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control"  value={this.state.name} onChange={this.HandleNameInput.bind(this)}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control"  value={this.state.email} onChange={this.HandleEmailInput.bind(this)} readOnly disabled/>
                        
                    </div>
                    <div className="form-group">
                        <label >City</label>
                        <input type="text" className="form-control"  value={this.state.city} onChange={this.HandleCityInput.bind(this)} />
                        
                    </div>
                    <div className="form-group">
                        <label >Course</label>
                        <input type="text" className="form-control"  value={this.state.course} onChange={this.HandleCourseInput.bind(this)}/>
                        
                    </div>
                    <div className="form-group">
                        <label >Phone Number</label>
                        <input type="number" className="form-control"  value={this.state.phone} onChange={this.HandlePhoneInput.bind(this)}/>
                        
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Update</button>
                    <Link to='/dynamicdataapi' className="btn btn-primary">Goto Back</Link>
                    </form>
            </div>

        </>);
    }
    componentDidMount()
    {
        axios
        .get(`http://localhost:3000/react173/${this.props.match.params.usersviewid}`)
        .then( (apiresult)=> this.setState(apiresult.data) )
       
    }
}

export default Useredit;