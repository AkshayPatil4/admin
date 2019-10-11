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
import {  Card,
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
  
  Col} from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Order Section / Shop</CardTitle>
              </CardHeader>

              <CardBody>
                <Form>
                  <Row>
                      <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search Order id:"
                        type="text"
                        />

                        </FormGroup></Col>

                        <Col className="pr-md-1 col-md-2">
                      <FormGroup>
                        <Input
                        placeholder="search Order Date:"
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
                      <th>Order id</th>
                      <th>Order request Person</th>                      
                      <th >Ordered Item</th>
                      <th>Order Date</th>
                      <th>Order time</th>
                      <th>Shipping adderss</th>
                      <th>Order area</th>
                      <th>Order status</th>
                      <th>Order Payment</th>
                      <th>Order remark</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>##132314</td>
                      <td>Mike</td>
                      <td>T-shirt</td>
                      <td><input type="date"></input></td>
                      <td> <input type="time"></input></td>
                      <td>Mumbai</td>
                      <td >Malad</td>
                      <td><select> <option value="volvo">Accepted</option>
                              <option value="saab">Shipped</option>
                              <option value="saab">Delivered</option>
                              </select>
                              </td>
                      <td><select> <option value="volvo">COD</option>
                              <option value="saab">Online</option>
                             
                              </select></td>
                     
                      <td>###</td>
                      
                     
                    </tr>
                   
                    <tr>
                      <td>##132314</td>
                      <td>Mike</td>
                      <td>T-shirt</td>
                      <td><input type="date"></input></td>
                      <td> <input type="time"></input></td>
                      <td>Mumbai</td>
                      <td >Malad</td>
                      <td><select> <option value="volvo">Accepted</option>
                              <option value="saab">Shipped</option>
                              <option value="saab">Delivered</option>
                              </select>
                              </td>
                      <td><select> <option value="volvo">COD</option>
                              <option value="saab">Online</option>
                             
                              </select></td>
                     
                      <td>###</td>
                      
                     
                    </tr>

                    <tr>
                      <td>##132314</td>
                      <td>Mike</td>
                      <td>T-shirt</td>
                      <td><input type="date"></input></td>
                      <td> <input type="time"></input></td>
                      <td>Mumbai</td>
                      <td >Malad</td>
                      <td><select> <option value="volvo">Accepted</option>
                              <option value="saab">Shipped</option>
                              <option value="saab">Delivered</option>
                              </select>
                              </td>
                      <td><select> <option value="volvo">COD</option>
                              <option value="saab">Online</option>
                             
                              </select></td>
                     
                      <td>###</td>
                      
                     
                    </tr>

                    <tr>
                      <td>##132314</td>
                      <td>Mike</td>
                      <td>T-shirt</td>
                      <td><input type="date"></input></td>
                      <td> <input type="time"></input></td>
                      <td>Mumbai</td>
                      <td >Malad</td>
                      <td><select> <option value="volvo">Accepted</option>
                              <option value="saab">Shipped</option>
                              <option value="saab">Delivered</option>
                              </select>
                              </td>
                      <td><select> <option value="volvo">COD</option>
                              <option value="saab">Online</option>
                             
                              </select></td>
                     
                      <td>###</td>
                      
                     
                    </tr>

                    <tr>
                      <td>##132314</td>
                      <td>Mike</td>
                      <td>T-shirt</td>
                      <td><input type="date"></input></td>
                      <td> <input type="time"></input></td>
                      <td>Mumbai</td>
                      <td >Malad</td>
                      <td><select> <option value="volvo">Accepted</option>
                              <option value="saab">Shipped</option>
                              <option value="saab">Delivered</option>
                              </select>
                              </td>
                      <td><select> <option value="volvo">COD</option>
                              <option value="saab">Online</option>
                             
                              </select></td>
                     
                      <td>###</td>
                      
                     
                    </tr>

                    <tr>
                      <td>##132314</td>
                      <td>Mike</td>
                      <td>T-shirt</td>
                      <td><input type="date"></input></td>
                      <td> <input type="time"></input></td>
                      <td>Mumbai</td>
                      <td >Malad</td>
                      <td><select> <option value="volvo">Accepted</option>
                              <option value="saab">Shipped</option>
                              <option value="saab">Delivered</option>
                              </select>
                              </td>
                      <td><select> <option value="volvo">COD</option>
                              <option value="saab">Online</option>
                             
                              </select></td>
                     
                      <td>###</td>
                      
                     
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

export default Typography;
