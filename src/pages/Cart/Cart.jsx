import { useCart } from './CartContext';
import {
  Table,
  Button,
  Form,
  Card,
  Container,
  Row,
  Col,
  Alert,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Container className='p-3 mt-3'>
      {cart.length === 0 ? (
        <Alert variant='warning' className='text-center'>
          🛒 Cart is empty
        </Alert>
      ) : (
        <>
          <Row>
            <Col md={12}>
              <Table bordered hover className='align-middle text-center'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className='text-start ps-5'>
                        <img
                          src={item.image}
                          alt={item.name}
                          height='50'
                          width={50}
                          className='me-2'
                        />
                        {item.name}
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <div className='d-flex align-items-center justify-content-center'>
                          <Form.Control
                            type='number'
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                Math.max(1, Number(e.target.value))
                              )
                            }
                            min='1'
                            className='text-center'
                            style={{ maxWidth: '60px' }}
                          />
                        </div>
                      </td>

                      <td>${item.price * item.quantity}</td>
                      <td>
                        <Button
                          onClick={() => removeFromCart(item.id)}
                          variant='danger'
                          style={{ border: '1px solid black' }}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className='d-flex justify-content-between'>
                <Button
                  onClick={() => {
                    navigate('/');
                  }}
                  variant='light'
                  style={{ border: '1px solid black' }}
                >
                  Return To Shop
                </Button>
                <Button variant='light' style={{ border: '1px solid black' }}>
                  Update Cart
                </Button>
              </div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col md={5}>
              <div className='d-flex '>
                <Form.Control
                  type='text'
                  placeholder='Coupon Code'
                  className='me-2'
                />
                <Button variant='danger'>Apply Coupon</Button>
              </div>
            </Col>
            <Col md={2}></Col>
            <Col md={5}>
              <Card className='p-3'>
                <Card.Body>
                  <h4>Cart Total</h4>
                  <br />
                  <Table borderless>
                    <tbody>
                      <tr className='border-bottom'>
                        <td>Subtotal:</td>
                        <td>${subtotal}</td>
                      </tr>
                      <tr className='border-bottom'>
                        <td>Shipping:</td>
                        <td>Free</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Total:</strong>
                        </td>
                        <td>
                          <strong>${subtotal}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button
                    variant='danger'
                    className='w-100'
                    onClick={() => navigate('/checkout')}
                  >
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
