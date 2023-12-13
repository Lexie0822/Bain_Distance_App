import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert, ListGroup } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch history from backend
  const fetchHistory = async () => {
    try {
      const response = await axios.get('https://opulent-winner-w6w9v7pv6xx2v9qv-5000.app.github.dev/api/historical-queries');
      setHistory(response.data);
    } catch (error) {
      toast.error('Error fetching history');
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const calculateDistance = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://opulent-winner-w6w9v7pv6xx2v9qv-5000.app.github.dev/api/calculate-distance', { source, destination });
      setDistance(response.data.distance);
      toast.success(`Distance is ${response.data.distance} km`);
      fetchHistory(); // Refresh history after adding new query
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error calculating distance');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="p-5">
      <h1 className="text-center mb-4">Distance Calculator</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Source Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter source address" 
            value={source} 
            onChange={(e) => setSource(e.target.value)} 
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Destination Address</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter destination address" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)}
            disabled={isLoading}
          />
        </Form.Group>
        <Button 
          variant="primary" 
          onClick={calculateDistance} 
          disabled={isLoading}>
            {isLoading ? 'Calculating...' : 'Calculate Distance'}
        </Button>
      </Form>
      {distance && <Alert variant="success" className="mt-4">Distance: {distance} km</Alert>}
      <ToastContainer />
      <h2 className="text-center mt-5">History</h2>
      <ListGroup>
        {history.map((query, index) => (
          <ListGroup.Item key={index}>
            {query.sourceAddress} to {query.destinationAddress}: {query.distance.toFixed(2)} km
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
