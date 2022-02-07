import React from 'react';

import axios from 'axios';

class LoadsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            payloads: [],
            search:''
        };
    }

    componentDidMount() {
        axios.get(`https://api.spacexdata.com/v3/payloads`)
            .then(res => {
                const payloads = res.data;
                this.setState({ payloads });
            })
    }

    render() {
        return (
            <div>
                <input type="text"  placeholder="search" onChange={(e)=>{this.setState({...this.state.search,search:e.target.value})}} />
          
            <li> {
                 <table class="table table-bordered table-dark">
                 <thead>
                   <tr>
                     <th scope="col">#</th>
                     <th scope="col">id</th>
                     <th scope="col">reused</th>
                     <th scope="col">Manufacturer</th>
                     <th scope="col">nationality</th>
                     <th scope="col">Handle</th>
                   </tr>
                 </thead>
                 <tbody>
                 {this.state.payloads.filter(payloads=>payloads.payload_id.includes(this.state.search)).map((payloads)=>{
                    return (
                       
                          <tr>
                            <td>.</td>
                            <td>{payloads.payload_id}</td>
                            <td>{payloads.reused}</td>
                            <td>{payloads.manufacturer}</td>
                            <td>{payloads.nationality}</td>
                            <td></td>
                          </tr>
                        
                       
                    )})

    }
                    </tbody>
                    </table>
                
            }
            </li>
            </div>

        )
    }
}
export default LoadsTable