import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home/Home.js'
import About from './About/About.js'
import Services from './Services/Services.js'
import Contact from './Contact/Contact.js'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Training from './Training/Training.js'

import pagenotfound from './pagenotfound.js'

import Reactjsc from './Services/Reactjsc.js'
import Reactnativejs from './Services/Reactnativejs.js'
import Nodejs from './Services/Nodejs.js'
import Reactclasscomponent from './Reactclasscomponent.js'
import Stateobject from './Stateobject.js'
import Clickbuttondata from './Clickbuttondata.js'
import Dynamicdataapi from './Dynamicdataapi.js'
import Userview from './Userview.js'
import Signup from './Signup.js'
import Useredit from './Useredit.js'


import SearchBox from './SearchBox.js';
import ReactReduxConnection from './ReactReduxConnection.js'

import HooksApi from './HooksApi.js';
import HooksApiView from './HooksApiView.js';
import HooksApiEdit from './HooksApiEdit.js';
import HooksSignup from './HooksSignup.js';
import PaginationTask from './PaginationTask.js';
import Demo from './Demo.js';
import HooksuseContext from './HooksuseContext.js';


const Routings = () => {
    return (<>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
                <Route path="/react-class-component" component={Reactclasscomponent} />
                <Route path="/state" component={Stateobject} />
                <Route path="/clickbuttondata" component={Clickbuttondata} />
                <Route exact path="/dynamicdataapi" component={Dynamicdataapi} />
                <Route path="/dynamicdataapi/view/:usersviewid" component={Userview} />
                <Route path="/dynamicdataapi/edit/:usersviewid" component={Useredit} />
                <Route path="/signup" component={Signup} />
                <Route path="/searchbox" component={SearchBox} />
                <Route path="/redux" component={ReactReduxConnection} />

                <Route exact path="/hooksApi" component={HooksApi} />
                <Route path="/hooksApi/hookview/:hooksid" component={HooksApiView} />
                <Route path="/hooksApi/hooksedit/:hooksid" component={HooksApiEdit} />
                <Route path="/hooksSignup" component={HooksSignup} />
                <Route path="/paginationTask" component={PaginationTask} />
                <Route path="/demo" component={Demo} />
                <Route path="/useContext" component={HooksuseContext} />


                <Route exact path="/training" component={Training} />
                <Route path="/training/reactjsc" component={Reactjsc} />
                <Route path="/training/reactnativejs" component={Reactnativejs} />
                <Route path="/training/nodejs" component={Nodejs} />
                <Redirect to="/home" />
                <Route component={pagenotfound} />


            </Switch>
            <Footer />
        </BrowserRouter>
    </>);
};

export default Routings;