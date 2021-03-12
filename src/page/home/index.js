import CONSTANT from "../../config/constant";
import React, {useEffect, useState} from 'react';
import {Breadcrumb, Layout, Menu, PageHeader} from 'antd';
import {Route} from "react-router-dom";
import Event from "../../components/event/index"
import Client from "../../components/client/index"

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    AppstoreOutlined, 
} from '@ant-design/icons';


import "./index.css"

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default function Home(props) {

    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    useEffect(() => {
        //检查是否已经登录
        let token = localStorage.getItem(CONSTANT.TOKEN_LOCALSTORAGE_KEY)
        if (token === null || token === undefined || token === "" || token === '') {
            props.history.push('/login')
        }
    }, [])


    const handleClient = () => {

    }
    const handleExit = () => {

    }
    const eventClick = () => {
        props.history.push('/home/event')
    }

    const userClick = () => {

    }

    const clientClick = () => {
        props.history.push('/home/client')
    }

    const exitClick = () => {


    }

    return <>
        <Layout style={{minHeight: '100vh'}}>

            <div className="logo" icon={AppstoreOutlined}/>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <span>菜单</span>
                    </Menu.Item>
                    <SubMenu
                        onClick={handleClient}
                        icon={<UserOutlined />} 
                        title={
                            <span>
                              <span>客户端</span>
                            </span>
                        }
                    >
                        <Menu.Item key="menuItemClientApp" onClick={clientClick}>客户端列表</Menu.Item>
                    </SubMenu>


                    <SubMenu
                     icon={<UserOutlined />} 
                        title={
                            <span>
                              <span>数据统计</span>
                            </span>
                        }
                    >
                        <Menu.Item key="" onClick={userClick}>用户统计</Menu.Item>
                        <Menu.Item key="" onClick={eventClick}>事件统计</Menu.Item>
                    </SubMenu>

                    <SubMenu
                     icon={<UserOutlined />} 
                        title={
                            <span>
                              <span>权限管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="">权限列表</Menu.Item>
                        <Menu.Item key="">添加权限</Menu.Item>
                    </SubMenu>
                    <SubMenu
                     icon={<UserOutlined />} 
                        title={
                            <span>
                              <span>用户管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="">添加用户</Menu.Item>
                    </SubMenu>
                    <Menu.Item
                     icon={<UserOutlined />} 
                    key="10" onClick={handleExit}>
                        <span onClick={exitClick}>退出登录</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <PageHeader
                    title="后台管理系统"
                />
                <Content style={{margin: '0 10px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        <div>
                            <Route path="/home/event" exact component={Event}/>
                            <Route path="/home/client" exact component={Client}/>
                        </div>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>shuangyangad.com</Footer>
            </Layout>
        </Layout>
    </>
}