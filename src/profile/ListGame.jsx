import React from 'react'
import { Button, Card } from 'react-bootstrap'

function ListGame({data}) {
  return (
<div style={{display:"flex",justifyContent: "space-around"}}>
        {data.map((el)=><div>
        <Card style={{ width: '18rem' , height : "500px" }}>
  <Card.Img variant="top" src={el.imgSrc} style={{height : "600px"}}/>
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
    {` ${el.price}`}
    </Card.Text>
    <Button variant="primary"  onClick={()=>alert(`the price of ${el.name} is ${el.price}` )}>show Price</Button>
  </Card.Body>
</Card></div>
        )}

    
    
    </div>
  )
}

export default ListGame

