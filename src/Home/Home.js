import React from 'react';
import Slider from '../Slider/Slider.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepublican } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
    return (<>
        <Slider />

        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://rekit.js.org/images/app-architecture.png" alt="reactimage" className="w-100" />
                </div>
                <div className="col-md-6">
                    <h3><FontAwesomeIcon icon={faRepublican} color="#61DBFB" size="1x" spin style={{ color: '#61DBFB' }} />React</h3>
                    <hr />
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

                    Declarative views make your code more predictable and easier to debug.</p>
                    <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.

                    Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM</p>
                    <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

                    React can also render on the server using Node and power mobile apps using React Native.</p>

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>React Native</h3>
                    <hr />
                    <h3>Create native apps for Android and iOS using React</h3>
                    <p>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

                        Use a little—or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.</p>
                    <h3>Written in JavaScript—rendered with native code</h3>
                    <p>React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.

                    Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain two platforms and share a common technology—React.</p>

                </div>
                <div className="col-md-6">
                    <img src="https://i.pinimg.com/originals/df/2c/19/df2c1970b16c2018c0f81e48bc813cad.jpg" alt="reactimage" className="w-100" />
                </div>

            </div>
        </div>

    </>);
};

export default Home;