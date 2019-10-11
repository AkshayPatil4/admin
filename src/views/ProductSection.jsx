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

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Product Section / Shop</CardTitle>
                </CardHeader>

                <CardBody>
                  <Form>
                    <Row>
                        <Col className="pr-md-1 col-md-2">
                        <FormGroup>
                          <Input
                          placeholder="search product id:"
                          type="text"
                          />

                          </FormGroup></Col>

                          <Col className="pr-md-1 col-md-2">
                        <FormGroup>
                          <Input
                          placeholder="search Product Name:"
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
                        <th>Product id</th>
                        <th> Name</th>                      
                        <th >Company</th>
                        <th>Description</th>
                        <th>Offers</th>
                        <th>Selling Price</th>
                        <th>Cost Price</th>
                        <th>Complains</th>
                        <th>Availability</th>
                        <th>Promo</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>##132314</td>
                        <td>Guitar</td>
                        <td>abc inc</td>
                        <td>Electronic Guitar</td>
                        <td>50%</td>
                        <td >9999</td>
                        <td>6000</td>
                        <td>Broken</td>
                        <td><select> <option value="volvo">Available</option>
                                <option value="saab">Not Available</option>
                        
                                     </select></td>
                        <td>FirstBuy</td>
                        
                        <td>Mumbai</td>
                        
                        <td><select> <option value="volvo">Merchandise</option>
                                <option value="saab">Equipment</option>
                                  <option value="opel">Tickets</option>
                                     </select></td>
                        <td><image src="assets/img/emilyz.jpg"></image></td>
                      </tr>
                     
                      <tr>
                        <td>##132314</td>
                        <td>Guitar</td>
                        <td>abc inc</td>
                        <td>Electronic Guitar</td>
                        <td>50%</td>
                        <td >9999</td>
                        <td>6000</td>
                        <td>Broken</td>
                        <td><select> <option value="volvo">Available</option>
                                <option value="saab">Not Available</option>
                        
                                     </select></td>
                        <td>FirstBuy</td>
                        
                        <td>Mumbai</td>
                        
                        <td><select> <option value="volvo">Merchandise</option>
                                <option value="saab">Equipment</option>
                                  <option value="opel">Tickets</option>
                                     </select></td>
                        <td><image src="assets/img/emilyz.jpg"></image></td>
                      </tr>

                      <tr>
                        <td>##132314</td>
                        <td>Guitar</td>
                        <td>abc inc</td>
                        <td>Electronic Guitar</td>
                        <td>50%</td>
                        <td >9999</td>
                        <td>6000</td>
                        <td>Broken</td>
                        <td><select> <option value="volvo">Available</option>
                                <option value="saab">Not Available</option>
                        
                                     </select></td>
                        <td>FirstBuy</td>
                        
                        <td>Mumbai</td>
                        
                        <td><select> <option value="volvo">Merchandise</option>
                                <option value="saab">Equipment</option>
                                  <option value="opel">Tickets</option>
                                     </select></td>
                        <td><image src="assets/img/emilyz.jpg"></image></td>
                      </tr>


                      <tr>
                        <td>##132314</td>
                        <td>Guitar</td>
                        <td>abc inc</td>
                        <td>Electronic Guitar</td>
                        <td>50%</td>
                        <td >9999</td>
                        <td>6000</td>
                        <td>Broken</td>
                        <td><select> <option value="volvo">Available</option>
                                <option value="saab">Not Available</option>
                        
                                     </select></td>
                        <td>FirstBuy</td>
                        
                        <td>Mumbai</td>
                        
                        <td><select> <option value="volvo">Merchandise</option>
                                <option value="saab">Equipment</option>
                                  <option value="opel">Tickets</option>
                                     </select></td>
                        <td><image src="assets/img/emilyz.jpg"></image></td>
                      </tr>


                      <tr>
                        <td>##132314</td>
                        <td>Guitar</td>
                        <td>abc inc</td>
                        <td>Electronic Guitar</td>
                        <td>50%</td>
                        <td >9999</td>
                        <td>6000</td>
                        <td>Broken</td>
                        <td><select> <option value="volvo">Available</option>
                                <option value="saab">Not Available</option>
                        
                                     </select></td>
                        <td>FirstBuy</td>
                        
                        <td>Mumbai</td>
                        
                        <td><select> <option value="volvo">Merchandise</option>
                                <option value="saab">Equipment</option>
                                  <option value="opel">Tickets</option>
                                     </select></td>
                        <td><image src="assets/img/emilyz.jpg"></image></td>
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

export default Tables;
