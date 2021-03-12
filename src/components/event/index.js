import React, {useState, useEffect, useCallback} from 'react';
import {PageHeader, Input, DatePicker, Button, Spin, Checkbox, Row, Col} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {Bar} from '@ant-design/charts';

import zh_CN from 'antd/lib/locale-provider/zh_CN'
import {ConfigProvider} from 'antd';

import 'antd/dist/antd.css';
import './index.css';

export default function Event(props) {
    const [datas, setDatas] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setDatas([
            {
                category: '激活',
                times: 38,
            },
            {
                category: '绑定微信',
                times: 138,
            },
            {
                category: '登陆',
                times: 238,
            },
            {
                category: '签到',
                times: 11238,
            },
        ])

        setIsLoading(false)

    }, [])


    const config = {
        data: datas,
        xField: 'times',
        yField: 'category',
        seriesField: 'category',
        legend: false,
        meta: {
            category: {alias: '类别'},
            times: {alias: '次数'},
        },
    };
    return <>
        <ConfigProvider locale={zh_CN}>
            <Spin tip="加载中..." spinning={isLoading}>
                <Col>
                    <Row gutter={1}>
                        <PageHeader
                            className="site-page-header"
                            title="事件统计"
                        />
                    </Row>
                    <Row gutter={1}>
                        <Checkbox.Group style={{width: '100%'}}>
                            <br/>
                            <h3 style={{width: '10%'}}>选择事件</h3>
                            <br/>
                            <Row>
                                <Col span={2}>
                                    <Checkbox value="A">激活</Checkbox>
                                </Col>
                                <Col span={2}>
                                    <Checkbox value="B">绑定微信</Checkbox>
                                </Col>
                                <Col span={2}>
                                    <Checkbox value="C">登陆</Checkbox>
                                </Col>
                                <Col span={2}>
                                    <Checkbox value="D">签到</Checkbox>
                                </Col>
                                <Col span={2}>
                                    <Checkbox value="E">提现</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                    </Row>

                    <Row gutter={1}>
                        <br/>
                        <Input.Group compact style={{width: 500}}>
                            <br/>
                            <h3 style={{width: '30%'}}>选择日期</h3>
                            <DatePicker.RangePicker
                                style={{width: '70%'}} onChange={(values, fromat) => {
                                setStartDate(fromat[0])
                                setEndDate(fromat[1])
                            }
                            }/>
                        </Input.Group>
                    </Row>
                    <Row gutter={1}>
                        <br/>
                        <br/>
                        <Button style={{marginLeft: "100px", width: "200px"}} type="primary" icon={<SearchOutlined/>}
                                onClick={() => {
                                    setIsLoading(false)
                                }}>
                            查询
                        </Button>
                    </Row>
                </Col>
                <Bar {...config} />
            </Spin>
        </ConfigProvider>
    </>;
}