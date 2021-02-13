import React,{ createContext, useContext } from 'react';


//React_Context_takes as Global_Object
const EmpContext=React.createContext()


const Employeee = () => {

    //React_context
   
    
    const empdata = useContext(EmpContext);
    
    // const {id,name,email,phno}=props
    return (
        <div className="">
            <h2>Employeee Component</h2>
            {/* {id}-{name}-{email}-{phno} */}
            {empdata.id}-{empdata.name}-{empdata.email}-{empdata.phno}
        </div>
    );
};

export default Employeee;

