import React, { Component,setState } from 'react';
import axios from 'axios';

class Signup extends Component {

    constructor(props){
        super();

        this.state = {
            name:'',
            email:'',
            city:'',
            course:'',
            phone:'',
            male:'',
            female:''

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
.post("http://localhost:3000/react173", formsdata)
.then( ()=>this.props.history.push('/dynamicdataapi') )

}

    render() {
        return (<>
            <div className="container"> 
                <h3 className="text-center">User Signup Form</h3>
                    <form onSubmit={ this.HandleSubmitForm.bind(this) }>
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.HandleNameInput.bind(this)}/>
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail">Email address</label>
                        <input type="email" className="form-control"  value={this.state.email} onChange={this.HandleEmailInput.bind(this)}/>
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputCity">City</label>
                        <input type="text" className="form-control" value={this.state.city} onChange={this.HandleCityInput.bind(this)} />
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputCourse">Course</label>
                        <input type="text" className="form-control" value={this.state.course} onChange={this.HandleCourseInput.bind(this)}/>
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputCourse">Phone Number</label>
                        <input type="number" className="form-control" value={this.state.phone} onChange={this.HandlePhoneInput.bind(this)}/>
                        
                    </div>
                   
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>

        </>);
    }
}

export default Signup;