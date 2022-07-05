import { useState } from "react";
import { Container,Row,Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";
function CartItems(){
    const [select , setSelect]=useState('');
    const dispatch = useDispatch();
    const add=(book)=>{
        dispatch(
            cartAction.addToCart({
                ...book,
                quantity : 1,
                price : 19,
                totalprice : 19

            })
        );
    }
    const remove=(book)=>{
        dispatch(   cartAction.removeFromCart(book)   );
    }
    const checkout=(book)=>{
        
        dispatch(  cartAction.selectBook(book)  );
        setSelect('selectedBook')
    };
    const items=useSelector((state)=>state.cartitem.bookList);
    const itemRepresentation = [];
    const representation=()=>{
       for(let i=0;i<items.length;i++){const element=items[i];
            itemRepresentation.push(
                
                <Row key={element.isbn} className={select} onClick={()=>{checkout(element)}}>
                <Col sm={3}>
                    <img style={{width:'100%'}} src={element.thumbnailUrl} alt={element.title}/>
                </Col>
                <Col>
                {element.price} $  X  {element.quantity} = {element.totalPrice} $
                </Col>
                <Col>
                <Button onClick={()=>remove(element)}>-</Button> {element.quantity} <Button onClick={()=>add(element)}>+</Button>
                
                 </Col>
                </Row>
                
            )

        };
    }
    representation();
    return (
        <Container>
           
        {itemRepresentation}
        </Container>
    );
}
export default CartItems;