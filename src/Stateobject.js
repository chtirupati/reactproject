import React, {setState} from 'react';

class Stateobject extends React.Component {
    constructor(){
        super();

        this.state ={
            sname : "",
            semail : "",
            smobile :  ""
        }
        
        this.state ={
            counter : 0
        }
    }

    chnagetheclcick = ()=>{
        this.setState({   
            sname : "Sahasra",
            semail : "sahasra@gmail.com",
            smobile :  9959903333
          })
    }

    handleStateData=()=>
  {
      if(this.state.counter<10){
            this.setState({ counter: this.state.counter+1 })
        }          
  }

  decrements=()=>
  {
    if(this.state.counter>0){
         this.setState({ counter: this.state.counter-1})
    }
  }
    
    render() {
        const {sname,semail,smobile} = this.state;
        return (<>
            <div className="container">
               <div className="row">
                    <div className="col-md-6">
                            <h3>Stateobject Component module</h3>
                        {sname} - {semail}-{smobile}

                        <br/><br/><br/>

                        <button type="button" className="btn btn-info" onClick = {this.chnagetheclcick}>Chnage the setstate data</button>    
                        <br/><br/> 
                        <label>Sname</label><br/><br/>  
                        <input type="text" value={sname}/>  <br/><br/>        
                        <label>Semail</label><br/> <br/>    
                        <input type="email" value={semail}/>  <br/><br/>       
                        <label>SMobile</label><br/><br/>        
                        <input type="text" value={smobile}/>  <br/><br/>   
                    </div>
                    <div className="col-md-6">
                    <h3>Counter Increment & Decrement</h3>
                        <p>Counter value:</p>
                        {this.state.counter}<br/><br/>
                        <button type="button"
                          className="btn btn-info mr-3" 
                          onClick={  this.handleStateData }> 
                          Counter_Increment
                    </button>
                    <button type="button"
                          className="btn btn-info" 
                          onClick={  this.decrements }> 
                          Counter_Decrement
                    </button>

                    </div>
                </div> 
            </div>
       </> );
    }
}

export default Stateobject;