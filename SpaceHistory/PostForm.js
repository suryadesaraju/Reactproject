import React, { Component } from 'react';
import axios from 'axios';

class Postform extends Component {

    constructor(props) {
        super(props)

        this.state={
            
            name:'',
            username:'',
            email:''
        }

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const data= this.state;
        console.log(data);
        axios.post('https://jsonplaceholder.typicode.com/users',data,{
            "Content-type": "application/json; charset=UTF-8"
          })
        
            .then(res => {
               console.log(res.json());
            })
            .then(data=>{
                this.state.name = data.name
                this.state.username = data.username
                this.state.email = data.email

            })
            .catch((error) => {
                console.log(error);
            })

            document.getElementById('postdata').style.display='block';
         
                
    }

    
    render(){
        const {name,username,email} = this.state
                return (
                    <center>
            <div class="form-group">
                <form  id= "postForm"onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name ::</label>
                        <input type="text"
                        class="form-control" 
                        name="name"
                        value={name}
                        onChange={this.handleChange}></input>
                    </div>
                     <div>
                        <label>Username ::</label>
                        <input type="text"
                        class="form-control" 
                        name="username"
                        value={username}
                        onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <span>
                        Email ::
                        <input type="text"
                        class="form-control" 
                        name="email"
                        value={email}
                        onChange={this.handleChange}></input>
                        </span>
                    </div>
 
                     <button class="btn btn-primary btn-lg " type="submit">Submit</button>
                </form>
            </div>

            <div id= "postdata" style={{display:'none'}}>
                <table class="table">
                    <tr><th scope="col">Name</th><th scope="col">Username</th><th scope="col">Email</th></tr>
                      <tr><td>{this.state.name}</td><td>{this.state.username}</td><td>{this.state.email}</td><td>Added Successful</td></tr>
                    
                </table>
            </div>
</center>

                      

                      
        )
    }
}

export default Postform