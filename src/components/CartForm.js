import { Form, Button} from "react-bootstrap";

function CartForm(){
    return (
        <>
        <Form className="p-2">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Shipping Address</Form.Label>
    <Form.Control type="text" placeholder="enter the shipping address"  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
        </>
    );
}

export default CartForm;