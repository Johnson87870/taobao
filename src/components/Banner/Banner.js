import React, { useState, useEffect, useRef } from "react";
import "./Banner.scss";
import Hammer from "hammerjs";

function Banner() {
  const bannerDatas = [
    "https://gw.alicdn.com/imgextra/i4/62/O1CN016t0XbK1CKR9b38HNy_!!62-0-lubanu.jpg",
    "https://img.alicdn.com/simba/img/TB1RIFfEhD1gK0jSZFKSuwJrVXa.jpg_q50.jpg",
    "https://img.alicdn.com/simba/img/TB1R9MPD7T2gK0jSZFkSuwIQFXa.jpg_q50.jpg",
    "https://gw.alicdn.com/imgextra/i2/135/O1CN017mUXdp1Crs4CJJtx6_!!135-0-lubanu.jpg",
  ];

  const [active, setActive] = useState(1);

  const banner = useRef(null);

  const SCREEN_WIDTH = window.screen.width;

  // console.log(banner, SCREEN_WIDTH);

  useEffect(() => {
    setTransition();
  }, [active]);

  const setTransition = (offset = 0) => {
    function transitionend() {
      // 动画结束后就关闭动画
      banner.current.style.transitionProperty = "none";
      // 恢复状态为1静止
      setActive(1);
      // 当前位置在补位的位置时马上切换到本该在的位置
      if (active === 0) {
        // 使用setTimeout包裹，避免transitionProperty动画未关闭就切换的闪频
        setTimeout(() => {
          setActive(bannerDatas.length);
        }, 0);
      }
      if (active === bannerDatas.length + 1) {
        setTimeout(() => {
          setActive(1);
        }, 0);
      }
      banner.current.removeEventListener("transitionend", transitionend, false);
    }
    banner.current.addEventListener("transitionend", transitionend, false);

    const distance = (1 - active) * SCREEN_WIDTH;
    banner.current.style.transform = `translate3d(${distance + offset}px,0,0)`;
  };

  const handleChangeActive = (number) => {
    // 当在动画进行时，不允许切换
    if (active === 2) return;
    // 切换前先把动画参数打开
    banner.current.style.transitionProperty = "all";
    // 修改状态为进行时
    setActive(2);
    // 改变当前位置
    setActive(number);
  };

  const back = () => {
    console.log("back");
    setActive(active === 0 ? bannerDatas.length : active - 1);

    console.log(active);
  };

  const next = () => {
    console.log("next");
    setActive(active === bannerDatas.length + 1 ? 1 : active + 1);

    console.log(active);
  };

  return (
    <div className="banner">
      <ul ref={banner} className="banner-list">
        {/* <li>1</li>
        <li>2</li>
        <li>3</li> */}
        {bannerDatas.map((image, index) => {
          if (active <= 1 && index + 1 === bannerDatas.length) {
            return (
              <li key={index} style={{ left: -1 * SCREEN_WIDTH }}>
                <img src={image} alt="" />
              </li>
            );
          }
          if (active >= bannerDatas.length && index == 0) {
            return (
              <li
                key={index}
                style={{ left: bannerDatas.length * SCREEN_WIDTH }}
              >
                <img src={image} alt="" />
              </li>
            );
          }
          return (
            <li key={index} style={{ left: index * SCREEN_WIDTH }}>
              <img src={image} alt="" />
            </li>
          );
        })}
      </ul>

      {/* <div onClick={back}>left</div> */}
      {/* <div onClick={next}>right</div> */}
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
