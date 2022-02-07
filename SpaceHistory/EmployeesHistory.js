import React from 'react';
import axios from 'axios';
import {getHistory} from '../Services'
import ErrorBoundary from '../ErrorHandler/ErrorBoundary';
class SpacxHistorty extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
            
            loading:false,
            filteredHistory:[]

        };
    }

    componentDidMount() {
        //throw new Error("No Data");
        this.setState({loading:true})
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const history = res.data;
                this.setState({ history,loading:false,filteredHistory : history});
            })
            .catch(err => {
                throw new Error("Not able to load")
            })
    }

    // delete = (e) => {
    //         const clickedCardId = e.target.getAttribute('id');
    //         const filteredHistory = this.state.history.filter(history => history.id != clickedCardId);
    //         this.setState({filteredHistory}); 
    // }
   handelChange = (e) => {
               const filteredHistory = this.state.history.filter(history=>history.name.includes(e.target.value));
               this.setState({filteredHistory});
    }
    
    render() {
        
        return (
            
          this.state.loading?<div class="loader"></div>: <div>
                <input type="text" placeholder="search by Name" onChange={this.handelChange} />
            
          {this.state.filteredHistory.length > 0 ? <li class="col"> {
                this.state.filteredHistory.map((history) => {
                    return (
                    
                        <div className="shadow-lg p-3 m-5 bg-body rounded ">
                            <div className="card text-center m-4    ">
                                <h5 className="card-header">ID:{history.id}</h5>
                                <div className="card-body">
                                    
                                      
                                    <b>Name</b>: <i>{history.name}</i><br />
                                     <b>username</b>:<i>{history.username}</i><br />
                                     <b>email</b>:<i>{history.email}</i><br />
                                     {/*<button  class="btn btn-info" id={history.id} onClick={this.delete}>remove</button>*/}
                        
                                </div>
                           </div>
                        </div>
        
                    )
                })
            }
            </li>:<div>NoDataFound</div>}
            </div>
        )
        
        
    }
}
export default SpacxHistorty