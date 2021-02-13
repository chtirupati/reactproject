import React, { Component } from 'react';
import userinfo from './posts.json';

//Child component Usersdata

import Usersdata from './Usersdata';
import Search from './Search';





class SearchBox extends Component {

    constructor(props) {

        super();

        this.state = {

            users: userinfo, // display alla the records
            filterdata:userinfo // after filter then matched records only
            //check with filter logic using search Request....
        }

    }

    //filter data with search request
    filterwithSearchRequest=(request)=>{
        //main logic--- 
        //-1---//0/1/2/3/4
       
        const matchdata =  this.state.filterdata.filter((data)=>{
            return( 
                data.name.toLocaleLowerCase().indexOf(request.toLocaleLowerCase() )>-1 || 
                data.email.toLocaleLowerCase().indexOf(request.toLocaleLowerCase() )>-1 ||
                data.city.toLocaleLowerCase().indexOf(request.toLocaleLowerCase() )>-1 ||
                data.course.toLocaleLowerCase().indexOf(request.toLocaleLowerCase() )>-1 //||
              // data.phone.indexOf(request)>-1
           
            )
        })

        this.setState({users:matchdata})

    }


    render() {
        return (<>
          

                 <Search searchRequest={(result)=>this.filterwithSearchRequest(result)}/>
           
                <Usersdata users={this.state.users} />

            
        </>);
    }

}

export default SearchBox;