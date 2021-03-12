import React, {useState, useEffect} from 'react';
import {Button, Card, Input, Spin, message} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import {gql} from "@apollo/client"

import 'antd/dist/antd.css';
import "./index.css"

import CONSTANT from "../../config/constant";
import client from "../../config/graphql";

export default function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        //检查是否已经登录
        let token = localStorage.getItem(CONSTANT.TOKEN_LOCALSTORAGE_KEY)
        if (token != null && token != undefined && token != "" && token != '') {
            props.history.push('/home')
        }
    }, [])

    const login = () => {
        if (username === null || username === undefined || "" === username) {
            message.error('用户名不能为空')
            return
        }
        if (password === null || password === undefined || "" === password) {
            message.error('密码不能为空')
            return
        }
        client.mutate({
            mutation: gql`mutation {
              login(input: { username: "${username}", password: "${password}" }) {
                token
              }
            }
`,
            errorPolicy: 'all'
        }).catch(err => {

        })
            .then(result => {
                if (result.errors) {
                    console.log("result : " + result.errors[0].message)
                    message.error(result.errors[0].message)
                } else {
                    const token = result.data.login.token;
                    if (token != null && token != undefined) {
                        localStorage.setItem(CONSTANT.TOKEN_LOCALSTORAGE_KEY, result.data.login.token)
                        props.history.push('/home')
                    } else {
                        message.error('登录失败')
                    }
                }
            })
    }

    return <>
        <div className="login-div">
            <Spin tip="加载中..." spinning={loading}>
                <Card title="后台管理系统" bordered={true} style={{width: 400}}>
                    <Input
                        id="userName"
                        size="large"
                        placeholder="请输入用户名"
                        prefix={<UserOutlined/>}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="请输入密码"
                        prefix={<LockOutlined/>}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={login}> 登录 </Button>
                </Card>
            </Spin>
        </div>
    </>
}
