import { Col, Row } from 'react-bootstrap';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/PlContext';
import SingleTeam from '../components/SingleTeam';

function Teams() {
  const { teams, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <h2>Teams</h2>
      </div>
      <Row md={3} xs={2} lg={5} className="g-3">
        {teams.map((team) => {
          return (
            <Col key={team.id}>
              <SingleTeam {...team} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Teams;
