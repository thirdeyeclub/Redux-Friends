import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state={
        friend: {
            name:'',
            age: '',
            email: ''
                    }
                    }}
    
    changeHandle = (e) =>{
    this.setState({ 
        friend:{
        ...this.state.friend,
       [e.target.name]: e.target.value}
    })
    }

    render(){
        return(
          <form>
              <h1>Add Buddy</h1>
                xxxxxxxxxxxx
                <input name="name" type="text" onChange={this.changeHandle}  placeholder="Name..." value={this.state.friend.name}/>
                <input name="age" type="text" onChange={this.changeHandle} placeholder="How old?"  value={this.state.friend.age}/>
                <input name="email" type="text" onChange={this.changeHandle} placeholder="Email..."  value={this.state.friend.email}/>
                <button onClick={e => this.props.addBuddy(e,this.state.friend)}>
                    Add Buddy</button>
                xxxxxxxxxxxx
          </form>
      )
  }

}

export default Form;