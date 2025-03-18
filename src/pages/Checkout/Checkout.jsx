import { useState } from 'react';
import { useCart } from '../Cart/CartContext';
import { Form, Table, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Checkout() {
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMessage = '';

    if (!value.trim()) {
      errorMessage = 'Trường này không được để trống.';
    } else {
      switch (name) {
        case 'firstName':
          if (!/^[A-Za-z\s]+$/.test(value)) {
            errorMessage = 'Chỉ được nhập chữ cái và khoảng trắng.';
          }
          break;
        case 'email':
          if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            errorMessage = 'Email không hợp lệ.';
          }
          break;
        case 'phone':
          if (!/^\+?[0-9]{7,15}$/.test(value)) {
            errorMessage = 'Số điện thoại không hợp lệ.';
          }
          break;
        default:
          break;
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  return (
    <div className='container p-4'>
      <h2 className='mb-5'>Billing Details</h2>
      <Row>
        <Col md={5}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>
                First Name<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='text'
                className={`bg-light text-dark ${
                  errors.firstName ? 'is-invalid' : ''
                }`}
                onBlur={(e) => validateField('firstName', e.target.value)}
              />
              {errors.firstName && (
                <Form.Text className='text-danger'>
                  {errors.firstName}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Company Name</Form.Label>
              <Form.Control type='text' className='bg-light text-dark' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>
                Street Address<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='text'
                className={`bg-light text-dark ${
                  errors.streetAddress ? 'is-invalid' : ''
                }`}
                onBlur={(e) => validateField('streetAddress', e.target.value)}
              />
              {errors.streetAddress && (
                <Form.Text className='text-danger'>
                  {errors.streetAddress}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Apartment, floor, etc. (optional)</Form.Label>
              <Form.Control type='text' className='bg-light text-dark' />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>
                Town/City<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='text'
                className={`bg-light text-dark ${
                  errors.city ? 'is-invalid' : ''
                }`}
                onBlur={(e) => validateField('city', e.target.value)}
              />
              {errors.city && (
                <Form.Text className='text-danger'>{errors.city}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>
                Phone Number<span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='text'
                className={`bg-light text-dark ${
                  errors.phone ? 'is-invalid' : ''
                }`}
                onBlur={(e) => validateField('phone', e.target.value)}
              />
              {errors.phone && (
                <Form.Text className='text-danger'>{errors.phone}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>
                Email Address
                <span className='text-danger'>*</span>
              </Form.Label>
              <Form.Control
                type='email'
                className={`bg-light text-dark ${
                  errors.email ? 'is-invalid' : ''
                }`}
                onBlur={(e) => validateField('email', e.target.value)}
              />
              {errors.email && (
                <Form.Text className='text-danger'>{errors.email}</Form.Text>
              )}
            </Form.Group>

            <Form.Check
              type='checkbox'
              label='Save this information for faster check-out next time'
              className='mb-3'
            />
          </Form>
        </Col>

        <Col md={2}></Col>

        <Col md={5}>
          <Table borderless>
            <tbody>
              {cart.map((item) => (
                <tr style={{ verticalAlign: 'middle' }} key={item.id}>
                  <td
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      // height='50'
                      width={50}
                      style={{ marginRight: '8px' }}
                    />
                    {item.name}
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
              <tr className='border-bottom align-middle'>
                <td>Subtotal:</td>
                <td>${totalPrice}</td>
              </tr>

              <tr className='border-bottom align-middle'>
                <td>Shipping:</td>
                <td>Free</td>
              </tr>

              <tr className='align-middle'>
                <td>
                  <strong>Total:</strong>
                </td>
                <td>
                  <strong>${totalPrice}</strong>
                </td>
              </tr>
            </tbody>
          </Table>

          <h5 className='mt-4'>Payment Method</h5>
          <Form>
            <Form.Check
              type='radio'
              label='Bank'
              name='payment'
              className='mb-2'
            />
            <Form.Check
              type='radio'
              label='Cash on delivery'
              name='payment'
              className='mb-3'
              defaultChecked
            />
          </Form>

          <Row className='mb-3'>
            <Col>
              <Form.Control
                type='text'
                placeholder='Coupon Code'
                className='bg-light text-dark'
              />
            </Col>
            <Col xs='auto'>
              <Button variant='danger'>Apply Coupon</Button>
            </Col>
          </Row>

          <Button variant='danger' className='w-100'>
            Place Order
          </Button>
        </Col>
      </Row>
    </div>
  );
}
