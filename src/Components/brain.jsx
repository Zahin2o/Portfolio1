import React from 'react';


const CricketBalls = () => {
  return (
    <>
      <div className="cricket-balls left">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/public/8947599.png"
            alt="cricket ball"
            className="cricket-ball"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </div>

      <div className="cricket-balls right">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src="/public/8947599.png"
            alt="cricket ball"
            className="cricket-ball"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </div>
    </>
  );
};

export default CricketBalls;
