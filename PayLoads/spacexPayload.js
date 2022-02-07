import React from 'react';
import axios from 'axios';
import LoadsTable from './payloadsTable'
import {getHistory} from '../Services'

class Spacxpayloads extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            payloads: [],
            
            loading:false,
            filteredPayloads:[]

        };
    }

    componentDidMount() {

        this.setState({loading:true})
        axios.get(`https://api.spacexdata.com/v3/payloads`)
            .then(res => {
                const payloads = res.data;
                this.setState({ payloads,loading:false,filteredPayloads : payloads});
            })
    }

    // delete =(e) => {
    //         const clickedCardId = e.target.getAttribute('id');
    //         const filteredPayloads = this.state.payloads.filter(payloads => payloads.payload_id != clickedCardId);
    //         this.setState({filteredPayloads}); 
    // }
   handelChange = (e) => {
               const filteredPayloads = this.state.payloads.filter(payloads=>payloads.payload_id.includes(e.target.value));
               this.setState({filteredPayloads});
    }
    
    render() {
        console.log(this.state.search)
        return (
          this.state.loading?<div class="loader"></div>: <div>
                <input type="text" placeholder="search by title" onChange={this.handelChange} />
              
          {this.state.filteredPayloads.length > 0 ? <li> {
                this.state.filteredPayloads.map((payloads) => {
                    return (
                        <div className="shadow-lg p-3 m-5 bg-body rounded ">
                            <div className="card text-center m-4  ">
                                <h5 className="card-header">ID:{payloads.payload_id}</h5>
                                <div className="card-body ">
                                    
                                      <b>Title:{payloads.nationality}</b> <br />
                                    <b>Manufacturer: {payloads.manufacturer}</b><br />
                                     <b>payloadType:{payloads.payload_type}</b><br />
                                     <b>payloadMass:{payloads.payload_mass_kg}</b><br />
                                    {/* <button  class="btn btn-info" id={payloads.payload_id} onClick={this.delete}>remove</button>*/}
                        
                                </div>
                           </div>
                        </div>
                    )
                })
            }
            </li>:<div>:::NoDataFound:::</div>}
            </div>

        )
    }
}
export default Spacxpayloads