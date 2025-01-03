import React from "react";

const Snowflake = () => {
  const snowflakes = Array.from({ length: 12 });

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 w-full h-full overflow-hidden z-50 pointer-events-none">
      {snowflakes.map((_, index) => (
        <div
          key={index}
          className={`absolute top-[-10%] animate-snowflakesShake`}
          style={{
            left: `${index * 10}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <div
            className="text-white text-sm font-sans shadow-lg animate-snowflakesFall"
            style={{ animationDelay: `${index * 2}s` }}
          >
            ❅
          </div>
        </div>
      ))}
    </div>
  );
};

export default Snowflake;
