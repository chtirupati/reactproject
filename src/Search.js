import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super();

        this.state = {

            req:''
        }
    }

    HandleReqInput=(e)=>{

        this.setState({req:e.target.value})
        this.props.searchRequest(e.target.value); //important

    }
    render() {
        return (<>
            <div className="container"> 
               
                    <form >
                    <div className="form-group">
                        <label >Search with Name/Email/City </label>
                        <input type="search" className="form-control"  value={this.state.req} onChange={this.HandleReqInput.bind(this)}/>
                     <small>{this.state.req.toLocaleUpperCase()}</small>
                        
                    </div>
                    </form>
            </div>
        </>);
    }
}

export default Search;