import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        email:""
    };
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", email: ""});
    };
    render(){
        return(
            <div className="ui main">
                <h2>Add contact</h2>
                <form onSubmit={this.add} className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input 
                        value={this.state.name} 
                        onChange={ (e)=>this.setState({name: e.target.value}) } 
                        type="text" name="name" placeholder='name' 
                        className="text" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        value={this.state.email} 
                        onChange={ (e)=>this.setState({email: e.target.value}) } 
                        type="text" name="email" placeholder='email' 
                        className="email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;