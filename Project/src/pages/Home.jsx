import React from 'react';
import Counter from '../hooks/Counter';
import LikeDislike from '../hooks/LikeDislike';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Counter />
      <hr style={{ margin: '20px 0' }} />
      <h2>Like and Dislike count</h2>
      <LikeDislike />
    </div>
  );
};

export default Home;