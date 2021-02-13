import React from 'react';

const Contact = () => {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <img src="./../images/contactus.jpg" alt="contactimg" className="w-100" />
            </div>
        </div>

        <div className="container">

            <div className="row">
                <div className="offset-sm-2 col-sm-8 my-5">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" placeholder="Enter Name" id="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Email Subject:</label>
                            <input type="text" className="form-control" placeholder="Enter Subject" id="subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>

                            <textarea className="form-control" placeholder="Enter Message" id="message"></textarea>
                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>);
};

export default Contact;