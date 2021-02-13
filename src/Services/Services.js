import React from 'react';
import { BrowserRouter, Route , Redirect , Link , Switch } from 'react-router-dom';
import Reactjsc from './Reactjsc.js';
import Reactnativejs from './Reactnativejs.js';
import Angularjs from './Angularjs.js';
import Nodejs from './Nodejs.js';
import Vu from './Vu.js';


const Services = ({match}) => {
    const parentroute=match.path
    return (<>
    <BrowserRouter>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to={`${parentroute}/reactjsc`}>ReactJS</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/services/reactnativejs">ReactNative</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/services/angularjs">Angularjs</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/services/nodejs">NodeJs</Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/services/vu">Vu</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-9">
                <Switch>
                        <Route exact path="/services" component={Reactjsc}/>
                        <Route path={`${parentroute}/reactjsc`} component={Reactjsc}/>

                        <Route path="/services/reactnativejs" component={Reactnativejs}/>
                        <Route path="/services/angularjs" component={Angularjs}/>
                        <Route path="/services/nodejs" component={Nodejs}/>
                        <Route path="/services/vu" component={Vu}/>

                        <Redirect to="/services" />
                        
                </Switch>
                    
                </div>
            </div>
        </div>
        </BrowserRouter>
    </>);
};

export default Services;