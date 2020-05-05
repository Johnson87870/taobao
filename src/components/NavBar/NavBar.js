import React, { useState, useEffect, useRef } from "react";
import './NavBar.scss';

function NavBar() {

    const navList = [
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
            'text': '天猫新品'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1',
            'text': '充值中心'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1',
            'text': '今日爆款'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1',
            'text': '机票酒店'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1',
            'text': '天猫国际'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1',
            'text': '金币庄园'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1',
            'text': '饿了么'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1',
            'text': '阿里拍卖'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1',
            'text': '天猫超市'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1',
            'text': '淘宝吃货'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1CoEwVrvpK1RjSZFqXXcXUVXa-185-144.png?getAvatar=1',
            'text': '分类'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
            'text': '咸鱼'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1fcOKXkCy2eVjSZSyXXXukVXa-183-144.png?getAvatar=1',
            'text': '天猫美食'
        },
        {
            'icon': 'https://img.alicdn.com/tfs/TB1FyEazAY2gK0jSZFgXXc5OFXa-183-144.png?getAvatar=1',
            'text': '会员中心'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1tikBVAPoK1RjSZKbXXX1IXXa-183-144.png?getAvatar=1',
            'text': '阿里健康'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB1xcTYxFT7gK0jSZFpXXaTkpXa-183-144.png?getAvatar=1',
            'text': '造点新货'
        }],
        [{
            'icon': 'https://gw.alicdn.com/tfs/TB1h1MnVCrqK1RjSZK9XXXyypXa-183-144.png?getAvatar=1',
            'text': '口碑生活'
        },
        {
            'icon': 'https://gw.alicdn.com/tfs/TB11tFkr7L0gK0jSZFxXXXWHVXa-183-144.png?getAvatar=1',
            'text': '土货鲜食'
        }],
    ]

    return (
        <div className="NavBar">
            {navList.map((item, index) => {
                return <div key={index} className="items">
                    {item.map((childItem, childIndex) => {
                        return <div key={childIndex}>
                            <span className="nav-icon">
                                < img src={childItem.icon} alt="" />
                            </span>
                            <span className="nav-text">{childItem.text}</span>
                        </div>
                    })}
                </div>
            })}
        </div>
    )
}

export default NavBar;
