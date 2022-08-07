import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function ReactBSCard(title, rmtSrc, descr) {
  const attributeDataSet = {title, rmtSrc, descr}
  for (let [key, value] of Object.entries(attributeDataSet)) {
    console.log(`valores recibidos en FOR---> key: ${key}`)
    return (
      // <Card style={{width: '18rem', backgroundcolor: 'black'}}>
      <Card style={{width: '80%', height: '20vw', object: 'cover', backgroundcolor: 'black'}}>
        <Card.Img variant="top" src={value.rmtSrc}/>
        <Card.Body style={{background: '#242222'}}> 
          <Card.Title style={{textAlign: 'center'}}>{value.title}</Card.Title>
          <Card.Text style={{textAlign: 'center'}}>
            {value.descr}
          </Card.Text>
          <div style={{display: 'flex', flexDirection: 'column', justifyItems: 'right', width: '45%'}}>
            <Button variant="outline-info">Ver contrenido</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ReactBSCard;