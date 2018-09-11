import React, { Component } from 'react';
import customerData from '../data/data.json' ;
import { Button,Table } from 'react-bootstrap';
import './customers.css';
import {withRouter} from 'react-router-dom';

class Customers extends Component {

    /** Top best Customers(30) */
    bestCustomers;
    constructor(props){
        super(props);
        this.getCustomerInfo();
    }

    /** This method returns 30 Customers with the highest number of deliveries in past 30 days*/
    getCustomerInfo() {
        var resultsToBeDisplayed = 30, prop = "count", customerDeliveries = this.getDeliveriesFrom30Days(),
            modeMap = {};
    
        for(var i = 0; i < customerDeliveries.length; i++){
            var el = customerDeliveries[i].customer.name;
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
        }

        /**Converts modeMap into array of Objects */
        this.bestCustomers = Object.entries(modeMap).map(([name,count]) => ({name,count}));

        this.bestCustomers.sort((x, y) => { return (x[prop])-(y[prop])});

        this.bestCustomers = this.bestCustomers.slice(0,resultsToBeDisplayed)
        console.log(this.bestCustomers, customerDeliveries)
        return this.bestCustomers;
    };

    handleClick(path) {
        this.props.history.push(path);
      }

    /** This method fetches the current date and last 30 days date*/  
    getCurrentDate() {
        var date = new Date(),
        todaysDate = date.toISOString().split('T')[0];
        date.setDate(date.getDate() - 30);
        var pastDateString = date.toISOString().split('T')[0]; 
        return [pastDateString,todaysDate];
    } 
    
    /** This method returns all the deliveries happened in last 30 days */
    getDeliveriesFrom30Days() {
        var currentDates = this.getCurrentDate(), sortedData = customerData.deliveries.slice(), 
            customerDeliveries = [];
        for(var i=0; i<sortedData.length; i++){
            var customerDate = sortedData[i].date.substring(0, 10);
          if(currentDates[1] >= customerDate && currentDates[0] <= customerDate){ 
                customerDeliveries.push(sortedData[i]);
          }
        }
        return customerDeliveries;
    }

   render() {
      return (
    <div className="Customers">   
    <div  className="pm-button-customer">
        <Button bsStyle="primary" onClick={() => this.handleClick('/Landing')}>Navigate To Home</Button>
    </div>       
        <Table striped bordered condensed hover>
        <thead>
            <tr>  
            <th></th>     
            <th>Customer Name</th>
            <th>Records</th> 
            </tr>    
        </thead>
        <tbody>
            {this.bestCustomers.map((data, i) => {
                return (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.count}</td>
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