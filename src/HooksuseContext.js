import React, { createContext, useState,useContext } from 'react'
// import Employee from './Employeee';

//React_Context_takes as Global_Object
const EmpContext=React.createContext()

const HooksuseContext=()=> {
    //state_object
    const [emp]=useState({ id:1000, name:'kumar', email:'kumar.m@gmail.com', phno:7896541230,salary:98987 })

    //Destructuring for useState_variable
    const {id, name, email, phno }=emp

    return (
        <div className="container py-5">
            
                    <h3 className="py-2">useContext Hooks</h3>   

                    { id } - { name } - {email} - {phno}

                    <EmpContext.Provider value={emp}>
                                <Employee />
                    </EmpContext.Provider>

                    

        </div>
    )
}



//Child_Component
const Employee=()=>{

    const empdata=useContext(EmpContext);//props

    //const { id,name,email,phno }=empdata

    return (
        <div className="py-4">
            <h2>Employee Component</h2>
             { empdata.id } - { empdata.name } - { empdata.email } - { empdata.phno }

             <Salary />
        </div>
    )

}



//SubChild_Component
const Salary=()=>
{
    const empdata=useContext(EmpContext);
    const { name,email,salary }=empdata

     return (
        <div className="py-4">
            <h2>Employee_Salary_Component</h2>
             {name } - { email } - {salary}
        </div>
    )

}

export default HooksuseContext
