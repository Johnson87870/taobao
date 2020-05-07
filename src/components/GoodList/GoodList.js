import React from "react";
import "./GoodList.scss";

function GoodList() {
  const goodList = [
    {
      goodImage:
        "https://gw1.alicdn.com/bao/uploaded/i2/2200719164073/O1CN01W5yIKt1fxTlyXaTkX_!!0-item_pic.jpg_210x210.jpg",
      goodName: "Apple/苹果2019新款AirPods Pro真无线耳机入耳式蓝牙降噪充电盒",
      goodPrice: "1,899",
      goodBuy: "8036",
    },
    {
      goodImage:
        "https://gw.alicdn.com/bao/uploaded/i2/713805254/O1CN019Rptqp1ogNWo5QBPG_!!713805254.jpg_500x500q90.jpg",
      goodName:
        "【到手价4959元起/现货速发！】苹果11Apple/iPhone 11苹果国行原装iPhonese2019新款全网通智能手机正品max",
      goodPrice: "4,959",
      goodBuy: "5716",
    },
    {
      goodImage:
        "https://gw.alicdn.com/bao/uploaded/i4/1999887296/O1CN01ENegLS23lcHV0xAfE_!!0-item_pic.jpg_500x500q90.jpg",
      goodName: "2020春季格子衬衫男士长袖韩版潮流港风休闲百搭帅气衬衣春装外套",
      goodPrice: "57",
      goodBuy: "467",
    },
    {
      goodImage:
        "https://gw.alicdn.com/bao/uploaded/i4/3334136633/O1CN013d87Op1yrxhcGvMnA_!!0-item_pic.jpg_500x500q90.jpg",
      goodName: "基础款水煮型350g×3袋螺蛳粉先生马中才螺狮粉",
      goodPrice: "36.9",
      goodBuy: "2761",
    },
    {
      goodImage:
        "https://gw.alicdn.com/bao/uploaded/i3/196993935/O1CN01bL3YUj1ewH7HWhvBY_!!0-item_pic.jpg_500x500q90.jpg",
      goodName: "童装/男童/女童 (UT) MARIO 35TH 轻型全棉松紧短裤 423355",
      goodPrice: "59",
      goodBuy: "1377",
    },
    {
      goodImage:
        "https://gw.alicdn.com/bao/uploaded/i4/196993935/O1CN01c6r7Vh1ewH7EeP7Vz_!!0-item_pic.jpg_500x500q90.jpg",
      goodName: "男装/女装/亲子装 (UT) SUPER MARIO 35TH 印花T恤(短袖) 428704",
      goodPrice: "79",
      goodBuy: "2664",
    },
  ];
  return (
    <div className="goodList">
      {goodList.map((item, index) => {
        return (
          <div key={index} className="items">
            <span className="goodList-image">
              <img src={item.goodImage} alt="" />
            </span>
            <span className="goodList-goodTitle">{item.goodName}</span>
            <span className="goodList-price-buy">
              <span className="price">¥{item.goodPrice}</span>
              <span className="buy">{item.goodBuy}人已购买</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
export default GoodList;
