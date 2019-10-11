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

class UserProfile extends React.Component {
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">User Details</CardTitle>
              </CardHeader>

              <CardBody>
                <Form>
                  <Row>
                      <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search user id:"
                        type="text"
                        />

                        </FormGroup></Col>

                        <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search user Name:"
                        type="text"
                        />

                        </FormGroup></Col>

                        <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search user contact:"
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
                      <th>User id</th>
                      <th> Name</th>
                      <th>Email</th>
                      <th >Contact no</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Order</th>
                      <th>History</th>
                      <th>Complains</th>
                      <th>Remark</th>
                      <th>Activity</th>
                      <th>Bills</th>
                      <th>Verified user</th>
                      <th>User DP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>##132314</td>
                      <td>Charlie</td>
                      <td>Email@.abc.com</td>
                      <td>9898989898</td>
                      <td className>Mumbai</td>
                      <td>######</td>
                      <td>Guitar</td>
                      <td>Guitar</td>
                      <td>Delivery</td>
                      <td>g####</td>
                      <td>Guitarist</td>
                      <td>Transaction history</td>
                      <td><select> <option value="volvo">New user</option>
                              <option value="saab">Verified User</option>
                                <option value="opel">Block</option>
                                   </select></td>
                      <td><image src="assets/img/emilyz.jpg"></image></td>
                    </tr>
                   
                    <tr>
                      <td>##132314</td>
                      <td>Charlie</td>
                      <td>Email@.abc.com</td>
                      <td>9898989898</td>
                      <td className>Mumbai</td>
                      <td>######</td>
                      <td>Guitar</td>
                      <td>Guitar</td>
                      <td>Delivery</td>
                      <td>g####</td>
                      <td>Guitarist</td>
                      <td>Transaction history</td>
                      <td><select> <option value="volvo">New user</option>
                              <option value="saab">Verified User</option>
                                <option value="opel">Block</option>
                                   </select></td>
                    </tr>
                    <tr>
                      <td>##132314</td>
                      <td>Charlie</td>
                      <td>Email@.abc.com</td>
                      <td>9898989898</td>
                      <td className>Mumbai</td>
                      <td>######</td>
                      <td>Guitar</td>
                      <td>Guitar</td>
                      <td>Delivery</td>
                      <td>g####</td>
                      <td>Guitarist</td>
                      <td>Transaction history</td>
                      <td><select> <option value="volvo">New user</option>
                              <option value="saab">Verified User</option>
                                <option value="opel">Block</option>
                                   </select></td>
                    </tr>
                    <tr>
                      <td>##132314</td>
                      <td>Charlie</td>
                      <td>Email@.abc.com</td>
                      <td>9898989898</td>
                      <td className>Mumbai</td>
                      <td>######</td>
                      <td>Guitar</td>
                      <td>Guitar</td>
                      <td>Delivery</td>
                      <td>g####</td>
                      <td>Guitarist</td>
                      <td>Transaction history</td>
                      <td><select> <option value="volvo">New user</option>
                              <option value="saab">Verified User</option>
                                <option value="opel">Block</option>
                                   </select></td>
                    </tr>
                    <tr>
                      <td>##132314</td>
                      <td>Charlie</td>
                      <td>Email@.abc.com</td>
                      <td>9898989898</td>
                      <td className>Mumbai</td>
                      <td>######</td>
                      <td>Guitar</td>
                      <td>Guitar</td>
                      <td>Delivery</td>
                      <td>g####</td>
                      <td>Guitarist</td>
                      <td>Transaction history</td>
                      <td><select> <option value="volvo">New user</option>
                              <option value="saab">Verified User</option>
                                <option value="opel">Block</option>
                                   </select></td>
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

export default UserProfile;
