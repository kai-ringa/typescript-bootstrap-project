import Spinner from 'react-bootstrap/spinner';

function Loading() {
  return (
    <div className="d-flex justify-content-center">
      <Spinner
        animation="border"
        role="status"
        variant="success"
        style={{ width: '3rem', height: '3rem' }}
      >
        <div className="visually-hidden">Loading...</div>
      </Spinner>
    </div>
  );
}

export default Loading;
