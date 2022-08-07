import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactBSCard from './ReactBSCard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function LayoutCard() {
  return (
    <Container>
      <Row>
        <Col><ReactBSCard title="Imagen 1" rmtSrc="https://cdn.pixabay.com/photo/2011/12/15/11/37/galaxy-11188_960_720.jpg" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></Col>
        <Col><ReactBSCard title="Imagen 2" rmtSrc="https://cdn.pixabay.com/photo/2011/12/14/12/18/space-11099_960_720.jpg" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " /></Col>
        <Col><ReactBSCard title="Imagen 3" rmtSrc="https://www.elsoldemexico.com.mx/doble-via/ciencia/7ky7x0-astronomos-encuentran-posible-galaxia-satelite-de-m33/ALTERNATES/LANDSCAPE_960/Astr%C3%B3nomos%20encuentran%20posible%20galaxia%20sat%C3%A9lite%20de%20M33" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " /></Col>
      </Row>
      <Row>
        <Col><ReactBSCard title="Imagen 4" rmtSrc="https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_960_720.jpg" descr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " /></Col>
        <Col><ReactBSCard title="Imagen 5" rmtSrc="https://www.informavalencia.com/wp-content/uploads/2021/06/universo-caravaca.jpg" descr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " /></Col>
        <Col><ReactBSCard title="Imagen 6" rmtSrc="https://pbs.twimg.com/media/FMNbJcMXEA4XZKE?format=jpg" descr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " /></Col>
      </Row>
    </Container>
  );
}

export default LayoutCard;