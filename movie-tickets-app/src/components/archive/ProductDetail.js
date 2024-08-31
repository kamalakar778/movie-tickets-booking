import { BsCart3 } from 'react-icons/bs'
import { IconContext } from "react-icons";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Reducers from "./Reducers"
import Cart from './Cart'
import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { BiSolidHeart } from "react-icons/bi";
// import Counter from './Reducer';


const Products = ({ item }) => {
    const [state, dispatch] = useReducer(Reducers, { Cart: [] });

    // console.log(item);
    const handleClick = (e) => {
        dispatch({ type: 'incremented_age' })
        console.log("Products", e)
    }
    const { id, title, category, image, description, rating, price } = item
    return (
        <>
            <div className="" style={{ width: '15rem', display: "inline-block", marginRight: "1em", marginBottom: "1em" }} width="500px" height="500px" key={{ category }} >
                <div>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <IconContext.Provider value={{ color: 'black', size: '28', paddingTop: "20p" }}>
                        <BiSolidHeart />
                    </IconContext.Provider>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="card-img" src={image} alt="Card image cap" variant="top" width="200px" height="300px" />
                        <Card.Body>
                            <a href={`/products/${id}`} style={{ textDecoration: "none" }}>
                                <Card.Title>{title}</Card.Title>
                                <Card.Title>{id}</Card.Title>
                            </a>
                            <Card.Title >${price}</Card.Title>
                            <Card.Title>{category}</Card.Title>
                            <Card.Text style={{ fontSize: "20px" }}>A Book by Sri Prabhu padha</Card.Text>
                            <Button href="#" className="btn btn-primary" onClick={handleClick} style={{ display: 'center', marginLeft: '1em' }}>
                                <i className="fa fa-shopping-cart" style={{ fontSize: "20px", paddingInline: "0.5em" }}></i>
                                &ensp;Add to Cart&ensp;&ensp;</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div >
        </>
    )
}

export default Products