import React, { Component } from 'react';
import customerData from '../data/data.json' ;
import { Button, Table } from 'react-bootstrap';
import './landing.css'

class Landing extends Component {
    /**Event handler to navigate to Customers component/Page*/
    handleClick(path) {
        this.props.history.push(path);
      }
      
   render() {
      return (
    <div className="Landing">     
        <div>{
         <Button bsStyle="primary" className="pm-button" onClick={() => this.handleClick('/Customers')}>Click Me For Customers Information</Button>
        }    
        </div> 
        <Table striped bordered condensed hover>
          <thead>
          <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Ordered Date</th>
              <th>Cost</th>
              <th>Place</th>
          </tr>    
          </thead>
          <tbody>
              {customerData.deliveries.map((data, i) => {
                  return (
                      <tr key={i}>
                          <td>{data.customer.id}</td>
                          <td>{data.customer.name}</td>
                          {/* Modified date based on th ISO format in data.json */}
                          <td>{data.date.substring(0, 10)}</td>
                          <td>{data.cost}</td>
                          <td>{data.place}</td>
                      </tr>
                  )
              })}
          </tbody>
        </Table>
     </div>   
      );
   }
}
export default Landing;