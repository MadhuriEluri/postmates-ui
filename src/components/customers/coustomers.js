import React, { Component } from 'react';
import customerData from '../data/data.json' ;
import { Button,Table } from 'react-bootstrap';
import './customers.css';
import {withRouter} from 'react-router-dom';

class Customers extends Component {

    bestCustomers;
    constructor(props){
        super(props);
        this.getCustomerInfo();
    }
    getCustomerInfo() {
        var prop = "cost", resultsToBeDisplayed = 30;
        customerData.deliveries.sort((x,y) => {
            if (parseFloat(x[prop]) === parseFloat(y[prop])) return 0;
            else if (parseFloat(x[prop]) < parseFloat(y[prop])) return 1;
            else return -1;
        })
        this.bestCustomers = customerData.deliveries.slice(0,resultsToBeDisplayed)
        return this.bestCustomers;
    };

    handleClick(path) {
        this.props.history.push(path);
    }

   render() {
      return (
    <div className="Customers">   
    <div  className="pm-button-customer">
        <Button bsStyle="primary" href="/Landing">Navigate To Home</Button>
    </div>       
        <Table striped bordered condensed hover>
        <thead>
            <tr>
            <th>Records</th>    
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Customer Bill</th>
            </tr>    
        </thead>
        <tbody>
            {this.bestCustomers.map((data, i) => {
                return (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.customer.id}</td>
                        <td>{data.customer.name}</td>
                        <td>{data.cost}</td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
     </div>   
      );
   }
}
export default withRouter(Customers);