/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Image,
  Button,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  
  Col 
} from "reactstrap";

// core components

class Rtl extends React.Component {
 
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Studio Section</CardTitle>
              </CardHeader>

              <CardBody>
                <Form>
                  <Row>
                      <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search Event id:"
                        type="text"
                        />

                        </FormGroup></Col>

                        <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search Event Name:"
                        type="text"
                        />

                        </FormGroup></Col>

                        <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search location:"
                        type="text"
                        />

                        </FormGroup></Col>


                        <Col className="pr-md-1 ">
                      <FormGroup>
                      
                <Button className="btn-fill" color="primary" type="submit">
                  Search
                </Button>
              

                        </FormGroup></Col>
                  </Row>
                </Form>
              </CardBody>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Event id</th>
                    
                      <th>Name</th>    
                      <th>type</th>               
                      <th>Location</th>
                      <th>Venue</th>
                      <th>Category</th>
                      <th>Event host</th>
                      <th>Event partners</th>
                      <th>ticket links</th>
                      <th>about</th>
                      <th> Posted by</th>
                      <th>Event start date</th>
                      <th>Event end date</th>
                      <th>Event start Timing</th>
                      <th>Event end Timing</th>
                      <th>Notification</th>
                      
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>##132314</td>
                    
                      <td>old band</td>
                      <td>####</td>
                      <td>Mumbai</td>
                      
                      <td>benz arena</td>
                      <td >Jazz</td>
                     <td> iit bombay
                              </td>
                      
                     
                      <td>BMW , PAytm ,ETc</td>
                      <td>abcband.com</td>
                      <td>this is band about</td>
                      <td>########</td>
                      <td><input type="date"></input></td>
                      <td><input type="date"></input></td>
                      <td><input type="time"></input></td>
                      <td><input type="time"></input></td>

                      <td>Noti%$#@!</td>
                      
                      
                     
                    </tr>

                   

                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        
        </Row>
      </div>
      </>
    );
  }
}

export default Rtl;
