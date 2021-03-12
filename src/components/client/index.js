import React, {useState, useEffect} from 'react';
import {Button, List, Avatar, Switch} from 'antd'
import client from "../../config/graphql";
import {gql} from "@apollo/client";

export default function Client(props) {
    const [datas, setDatas] = useState([])


    useEffect(() => {

        setDatas([
            {
                id: "1",
                name: "A"
            },
            {
                id: "1",
                name: "A"
            },
            {
                id: "1",
                name: "A"
            },
            {
                id: "1",
                name: "A"
            },
            {
                id: "1",
                name: "A"
            },
            {
                id: "1",
                name: "A"
            },
        ])

    }, [])

    // useEffect(() => {
    //     client.query(gql`
    //         query {
    //           queryClients {
    //             name
    //             id
    //             icon
    //             packageName
    //             version
    //             deleted
    //             disable
    //             type1
    //             type2
    //             introduction
    //           }
    //         }
    //     `).then(result=>{
    //         // setDatas(result.data)
    //     })
    // }, [])

    return <>
        <List
            grid={{
                gutter: 5,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            bordered={true}
            itemLayout="vertical"
            dataSource={datas}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        }
                        title={<a href="https://ant.design">{item.name}</a>}
                        description={item.introduction}
                    />
                    <Button>{item.id}</Button>
                    <h3>数据统计开关</h3>
                    <Switch></Switch>
                </List.Item>
            )}
        />
    </>
}