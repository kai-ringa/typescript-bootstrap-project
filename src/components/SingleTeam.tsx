import { Card } from 'react-bootstrap';

type TeamProps = {
  name: string;
  image: string;
  year: string;
  stadium: string;
  nickname: string;
};

function SingleTeam({ name, image, year, stadium, nickname }: TeamProps) {
  return (
    <Card className="mh-100 img-thumbnail" border="success">
      <Card.Img variant="top" src={image} style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Team: {name}</Card.Title>
        <Card.Text style={{ fontWeight: '600' }}>
          <span>Founded: {year}</span>
          <br />
          <span>Nickname: {nickname}</span>
          <br />
          <span>Stadium: {stadium}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleTeam;
