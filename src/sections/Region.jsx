import React from "react";

const Region = () => {
  return (
    <div className="region-section">
      <div className="region mondo">
        <h1 className="relative z-10 region-name">Mondstadt</h1>
        <img src="/chara/Jean.png" alt="Jean" className="region-chara" />
      </div>
      <div className="region liyue">
        <h1 className="relative z-10 region-name">Liyue</h1>
      </div>
      <div className="region inazuma">
        <h1 className="relative z-10 region-name">Inazuma</h1>
      </div>
      <div className="region sumeru">
        <h1 className="relative z-10 region-name">Sumeru</h1>
      </div>
      <div className="region fontaine">
        <h1 className="relative z-10 region-name">Fontaine</h1>
      </div>
      <div className="region natlan">
        <h1 className="relative z-10 region-name">Natlan</h1>
      </div>
      <div className="region nod-krai">
        <h1 className="relative z-10 region-name">Nod Krai</h1>
      </div>
      <div className="region asap">Coming Soon</div>
    </div>
  );
};

export default Region;
