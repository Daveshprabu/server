import React, { useState, useEffect } from 'react';

function Example() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading state to true while data is being fetched
        setLoading(true);

        // Replace the placeholder URL with your actual API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1' );
        console.log(response);

        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the response
        const result = await response.json();

        // Set the data state with the fetched result
        setData(result);
      } catch (error) {
        // Set the error state if there's an issue with the API request
        setError(error);
      } finally {
        // Set loading state to false when the request is complete (whether it succeeded or failed)
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>Data from API</h1>
          {/* Display your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Example;
