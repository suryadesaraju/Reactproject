import React, { Component } from 'react';

 class ErrorBoundary extends Component{

    constructor(props){
        super(props)
        this.state ={
            hasError:false
        }

        }
    
    static getDerivedStateFrommError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)

    }
    render(){
        if(this.state.hasError){
            return <h1>Somthing Went wrong</h1>
        }
        return this.props.children 
    }
}

export default ErrorBoundary