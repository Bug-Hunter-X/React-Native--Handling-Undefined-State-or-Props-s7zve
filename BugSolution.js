// BugSolution.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      {/* Safely access data using optional chaining and nullish coalescing */}
      <Text>{data?.name ?? 'Name not available'}</Text>
      <Text>{data?.description ?? 'Description not available'}</Text> 
    </View>
  );
};
export default MyComponent;