import React from "react";

const Region = () => {
  return (
    <div className="region-section">
      <div className="region mondo">
        <h1 className="relative z-10 region-name">Mondstadt</h1>
        <img
          src="/chara/Jean.png"
          alt="Jean"
          className="region-chara top-[10%] right-[25%]"
        />
      </div>
      <div className="region liyue">
        <h1 className="relative z-10 region-name">Liyue</h1>
        <img
          src="/chara/Keqing.png"
          alt="Jean"
          className="region-chara top-[10%] right-[18%]"
        />
      </div>
      <div className="region inazuma">
        <h1 className="relative z-10 region-name">Inazuma</h1>
        <img
          src="/chara/Raiden.png"
          alt="Jean"
          className="region-chara top-[-10%] right-[13%]"
        />
      </div>
      <div className="region sumeru">
        <h1 className="relative z-10 region-name">Sumeru</h1>
        <img
          src="/chara/Tighnari.png"
          alt="Jean"
          className="region-chara top-[-30%] right-[18%]"
        />
      </div>
      <div className="region fontaine">
        <h1 className="relative z-10 region-name">Fontaine</h1>
        <img
          src="/chara/Furina.png"
          alt="Jean"
          className="region-chara top-[-50%] right-[18%]"
        />
      </div>
      <div className="region natlan">
        <h1 className="relative z-10 region-name">Natlan</h1>
        <img
          src="/chara/Xilonen.png"
          alt="Jean"
          className="region-chara top-[-8%] right-[10%]"
        />
      </div>
      <div className="region nod-krai">
        <h1 className="relative z-10 region-name">Nod Krai</h1>
        <img
          src="/chara/lamia.png"
          alt="Jean"
          className="region-chara top-[-8%] right-[18%]"
        />
      </div>
      <div className="region-asap region-name">Coming Soon</div>
    </div>
  );
};

export default Region;
