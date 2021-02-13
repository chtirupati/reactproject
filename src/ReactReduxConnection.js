import React, { Component } from 'react';

//react-redux connection into component
import { connect } from 'react-redux'

//Binding Actions & Reducers

import { bindActionCreators } from 'redux';


//actions

import { EmpActions, UsersAction, GlobalUserAction } from './Actions/index.js';

import Display from './Display.js';

class ReactReduxConnection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.EmpActions() //Redux action function
        this.props.UsersAction()
        this.props.GlobalUserAction()
    }
    render() {
        return (<>
            <div className="container py-5">

                <h2 className="py-2">ReactReduxConnectionComponent</h2>


                <h3>EMPDATA</h3>
                {
                    this.props.empdata.map((res, index) => {
                        return (<ul key={index}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }
                <h3>User Data</h3>
                {
                    this.props.userdata.map((res, index) => {
                        return (<ul key={index}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }
                <h3>Global Users data</h3>
                {
                    this.props.globaluserdata.map((res, index) => {
                        return (<ul key={index}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }




            </div>




            {/*<Display emp={this.props.empdata}/>*/}




        </>);
    }
}

const mapStateToProps = (state) => {
    // console.log(state.EmpReducer);
    return ({
        empdata: state.EmpReducer,
        userdata: state.UserReducer,
        globaluserdata: state.GlobalUserReducer
    })
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ EmpActions, UsersAction, GlobalUserAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxConnection);