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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

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

class Notifications extends React.Component {
 
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
                        placeholder="search Studio id:"
                        type="text"
                        />

                        </FormGroup></Col>

                        <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search Studio Name:"
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
                    <th>Artist id</th>
                    <th>Band id</th>
                      <th>Name</th>                      
                      <th>Location</th>
                      <th>email</th>
                      <th>Contact</th>
                      <th>No.of Members</th>
                      <th>Hire request</th>
                      <th>links</th>
                      <th>about</th>
                      <th> price</th>
                      <th> Availability</th>
                      <th>song links</th>
                      <th>album links</th>
                      <th>Remarks</th>
                      <th>Complaints</th>
                      <th>Inbox</th>
                      <th>features</th>
                      <th>Notification</th>
                      <th>Followers</th>
                      <th>Events</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>##132314</td>
                    <td>###$$$$</td>
                      <td>old band</td>
                      <td>Mumbai</td>
                      
                      <td>Abc@email.com</td>
                      <td >9898989898</td>
                      <td><select> <option value="volvo">2</option>
                              <option value="saab">3</option>
                              <option value="saab">4</option>
                              <option value="saab">5</option>
                              <option value="saab">6</option>
                              <option value="saab">7</option>
                              <option value="saab">8</option>
                              <option value="saab">9</option>
                              <option value="saab">10</option>
                              <option value="saab">More</option>
                              </select>
                              </td>
                      
                     
                      <td><button type="submit">Hire</button></td>
                      <td>abcband.com</td>
                      <td>this is band about</td>
                      <td>90000 per show</td>
                      <td><select><option>Available</option>
                      <option>Not Available</option></select></td>

                      <td>song1
                      </td>

                      <td>album1

                      </td>
                      <td>Re#########</td>
                      <td>Comp#####</td>
                      <td>Inbo####</td>
                      <td>Features####</td>
                      <td>Noti%$#@!</td>
                      <td>10000k </td>
                      <td>Tech fest Delhi</td>
                      
                     
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

export default Notifications;
