import React, { useState, useEffect, useRef } from "react";
import "./Banner.scss";

function Banner() {
  const bannerDatas = [
    "http://dingyue.nosdn.127.net/lZx3ujyfH46=YPTbha2pGrAqdghj9BiS5G3Sm6e=fu4461534591655949compressflag.jpeg",
    "http://5b0988e595225.cdn.sohucs.com/images/20191230/671d70970b294356822cf5b04975265a.png",
    "http://5b0988e595225.cdn.sohucs.com/images/20181202/ae8a507610e243bd87c241978d3c0865.png",
  ];

  const [active, setActive] = useState(1);

  const banner = useRef(null);

  const SCREEN_WIDTH = window.screen.width;

  // console.log(banner, SCREEN_WIDTH);

  useEffect(() => {
    setTransition();
  }, [active]);

  const setTransition = () => {
    const distance = (1 - active) * SCREEN_WIDTH;
    banner.current.style.transform = `translate3d(${distance}px, 0, 0)`;
  };

  const back = () => {
    console.log("back");
    setActive(active === 1 ? bannerDatas.length : active - 1);

    console.log(active);
  };

  const next = () => {
    console.log("next");
    setActive(active === bannerDatas.length ? 1 : active + 1);

    console.log(active);
  };

  return (
    <div className="banner">
      <ul ref={banner} className="banner-list">
        {/* <li>1</li>
        <li>2</li>
        <li>3</li> */}
        {bannerDatas.map((image, index) => {
          return (
            <li key={index} style={{ left: index * SCREEN_WIDTH }}>
              <img src={image} alt="" />
            </li>
          );
        })}
      </ul>

      <div onClick={back}>left</div>
      <div onClick={next}>right</div>
    </div>
  );
}

// const Banner = ({ childre, selectedIndex = 1 }) => {
//   const [active, setActive] = useState(selectedIndex);

//   const bannerdom = useRef(null);

//   const SCREEN_WIDTH = window.screen.width;

//   useEffect(() => {
//     setTransition();
//   }, [active]);

//   const setTransition = () => {
//     const distance = (1 - active) * SCREEN_WIDTH;
//     bannerdom.current.style.transform = `translate3d(${distance}px, 0, 0)`;
//   };

//   const handelPrev = () => {
//     setActive(active === 1 ? children.length : active - 1);
//   };

//   const handleNext = () => {
//     setActive(active === children.length ? 1 : active + 1);
//   };

//   return (
//     <div className="banner-box">
//       <div className={styles.bannerdom} ref={bannerdom}>
//         {React.Children.map(children, (child, index) => {
//           return (
//             <div style={{ left: index * SCREEN_WIDTH }} className={style.items}>
//               {child}
//             </div>
//           );
//         })}
//       </div>
//       <div>
//         <div onClick={handlePrev} className={styles.buttonLeft}>
//           Left
//         </div>
//         <div onClick={handleNext} className={styles.buttonRight}>
//           Right
//         </div>
//       </div>
//     </div>
//   );
// };

export default Banner;
