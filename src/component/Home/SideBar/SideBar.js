import React from "react";
import 'antd/dist/antd.css';
import '../../../css/Home/SideBar.css';
import { Menu, Icon } from "antd";
import Logo from '../../Logo.png'
import SLogo from '../../S_Logo.png';

const { SubMenu } = Menu;

function SideBar(props) {
    return (
        <div id="sidebar">
            { props.collapsed ? (
                <div id="logo"
                     style={{ width: "75px", height: "32.5px", position: "absolute", left: "5px", top: "5px" }}>
                    <img src={SLogo} alt="" style={{ width: "100%", height: "100%" }}/>
                </div>
            ) : (
                <div id="logo"
                 style={{ width: "195px", height: "32.5px", position: "absolute", left: "5px", top: "5px" }}>
                    <img src={Logo} alt="" style={{ width: "100%", height: "100%" }}/>
                </div>
            )}
            <Menu theme="dark" mode="inline">
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>{ props.name }</span>
                        </span>
                    }
                >
                    <Menu.Item key="1">My Information</Menu.Item>
                    <Menu.Item key="2">My Collection</Menu.Item>
                    <Menu.Item key="3">My Store</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="bank" />
                            <span>Store</span>
                        </span>
                    }
                >
                    <Menu.Item key="4">FG</Menu.Item>
                    <Menu.Item key="5">Animation</Menu.Item>
                    <Menu.Item key="6">Group (In Development)</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                            <Icon type="edit" />
                            <span>Editor</span>
                        </span>
                    }
                >
                    <Menu.Item key="7">New FG</Menu.Item>
                    <Menu.Item key="8">Open FG</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <Icon type="tool" />
                            <span>Tool</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Animation Editor</Menu.Item>
                    <Menu.Item key="10">Group Editor (In Development)</Menu.Item>
                </SubMenu>

            </Menu>
        </div>
    )
}

export default SideBar;