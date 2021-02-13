import React from 'react';


const Usersdata = (props) => {
    return (<>
       <div className="container py-5">
                <h3 className="py-3 text-center">
                    Users Data.....

                     </h3>

                <table className="table table-dark mx-auto my-2">
                    <thead className="thead-light">
                        <tr>
                            <th>SlNO</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CITY</th>
                            <th>COURSE</th>
                            <th>PHONE</th>


                           
                        </tr>
                    </thead>

              
                    <tbody>
                        {
                         props.users.map((res, index) => {
                                return (<tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.city}</td>
                                    <td>{res.course}</td>
                                    <td>{res.phone}</td>


                                    
                                </tr>)
                            })
                        }
                    </tbody>
                </table>


            </div>
    </>);
};

export default Usersdata;


