import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (<>
        <div className="container my-3">
            <h3>React Installtion Process</h3>
            <div className="process">
                <ol className="list-group">
                    <li className="list-group-item">
                        NodeJs Installtion<br />

                        <Link to={{ pathname: "https://nodejs.org/en/" }} target="_blank" ><FontAwesomeIcon icon={faHandPointRight} color="#61DBFB" size="1x" style={{ color: '#61DBFB' }} /> https://nodejs.org/en/</Link>
                    </li>
                    <li className="list-group-item">
                        <p>Reactjs Installtion</p>
                        <p>npm i -g create-react-app</p>

                    </li>
                    <li className="list-group-item">
                        <p> Create React App </p>
                        <p>create-react-app foldername</p>
                        <p>Open Folder</p>
                        <p>npm start</p>
                        <p>http://localhost:3000</p>
                        <hr />
                        <p>npm view react version <br />

                            npm view react-native version <br />

                            npm i react-native <br />

                            npm i react-redux</p>
                    </li>
                    <li className="list-group-item">
                        <p>Create Package.Json </p>
                         npm init

                         <div className="d-flex ">
                            <div className="flex-fill ">
                                <img src="./../images/npmpackage1.png" alt="npmpackageimage" className="w-100" />
                            </div>
                            <div className="flex-fill ">
                                <img src="./../images/npmpackage.png" alt="npmpackageimage" className="w-100" />
                            </div>

                        </div>

                    </li>
                    <li className="list-group-item">
                        <h3>Extra dependencies install (CLI)</h3>
                         npm i bootstrap <br />
                        npm i jquery <br />
                        npm install popper.js --save <br />
                        npm install react-router-dom <br />
                    </li>
                    <li className="list-group-item">
                        <h3>ReactDOM</h3>
                         import ReactDOM from 'react-dom'
                         ReactDOM.render("HELLO REACT",document.getElementById('root') );

                         <hr />

                    </li>

                    <li className="list-group-item">
                        <h3>React JSX</h3>
                        <p>import react from 'react';</p>
                        <p>JAVASCRIPT+HTML=JSX</p>

                        <p>JSX[JAVASCRIPT+TAGSL-VIEW OF RESULT</p>

                        <p>JS+HTML=JSX</p>
                    </li>

                    <li className="list-group-item">
                        <p>Inbuilt installtion</p>
                         react  Package  - Support / use React Functanalities into Your project <br />

                         react-dom  Package  -  Support / Use DOM Functionalities into your project <br />

                         react-scripts Package -  Compile and Run your project files...<br />
                    </li>
                    <li className="list-group-item">
                        <h3>Types of Components</h3>


                        - Functional Component [javascript Function]<br />

                        - Class Component [Ecmascript OOPS]<br />

                        - React Hooks Component [NEW Feature]<br />

                        - Higher Order Component [NEW Feature]<br />
                    </li>

                    <li className="list-group-item">
                        <h3>Important class C6.MAP AND LIST</h3>
                    </li>

                </ol>
                <h3>Json server create RestAPI</h3>
                <p>Step1. First create one file create json using object</p>
                <p>Step2. Install globally configure json server</p>
                <p>Step3. npm install -g json-server   Route folder c dribe users appdata</p>
                <p>Step4. install local watch file folder</p>
                <p>Step5. json-server --watch filename.json</p>
                <p>step6. package json --Scripts--portnumber chnage</p>
                <p>Step7. project port number chnages--packages.json-- "set port = 9999   symbol react-scripts start "</p>
                <p>Step8. json server filename file port number also changed to this command json-server --watch db.json --port 3004</p>
                <p>Step9. twocommands use one line--install this command == npm i concurrently</p>
                <p>Step10.create new/own command multiple command using single command at a time only</p>
                <p>Step11.packages.json---scripts</p>
                <p>Step12.packages.json---add line</p>
                <p>Step13.---  "sagan": "concurrently \"npm start\" \"json-server --watch registrations.json --port 3001\"",</p>
                <p>Step14.---  npm run sagan</p>
            </div>
        </div>
    </>);
};

export default About;