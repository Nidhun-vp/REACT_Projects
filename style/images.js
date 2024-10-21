import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://picsum.photos/seed/picsum/200/300
" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://picsum.photos/seed/picsum/200/300
" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://picsum.photos/seed/picsum/200/300
" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;