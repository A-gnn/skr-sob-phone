
import {
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    Select,
  } from 'antd';
  import React, { useState } from 'react';
  import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
  import { NavLink ,Route,Routes} from 'react-router-dom';
  // import Denglu from '../Pages/Denglu'
  import  Zhuce from '../Pagess/Zhuce'
  const { Option } = Select;
  
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5},
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const App: React.FC = () => {
    const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
  
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
  
    const suffixSelector = (
      <Form.Item name="suffix" noStyle>mi
        <Select style={{ width: 70 }}>
          <Option value="USD">$</Option>
          <Option value="CNY">¥</Option>
        </Select>
      </Form.Item>
    );
  
    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  
    const onWebsiteChange = (value: string) => {
      if (!value) {
        setAutoCompleteResult([]);
      } else {
        setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
      }
    };
  
    const websiteOptions = autoCompleteResult.map(website => ({
      label: website,
      value: website,
    }));
  
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['河南', '郑州', '管城'],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="邮箱"
          label="电子邮箱"
          rules={[
            {
              type: 'email',
              message: '请输入正确的邮箱格式!',
            },
            {
              required: true,
              message: '请输入你的邮箱地址!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="username"
          label="用户名称"
          rules={[
            {
              required: true,
              message: '请输入你的用户名!',
            },
            { max:20,message:'名称不超过20个字符'},
            {pattern: new RegExp(/^[\u4E00-\u9FA5]+$/),message:'用户名只能是汉字'}
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="password"
          label="用户密码"
          rules={[
            {
              required: true,
              message: '请输入你的密码!',
            },
            { max:20,message:'密码不超过20个字符'},
            {pattern: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/),message:'密码只能是大小写字母及数字'}
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请再次输入你上次所输入的密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('输入的两次密码不一样!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        
  
        <Form.Item
          name="phone"
          label="手机号码"
          rules={[{ required: true, message: '请输入你的手机号!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="用户性别"
          rules={[{ required: true, message: '请选择你的性别!' }]}
        >
          <Select placeholder="选择你的性别">
            <Option value="male">女</Option>
            <Option value="female">男</Option>
            <Option value="other">其它</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('需要点击同意服务协议')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            我已经阅读并同意<a href="">用户服务协议</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}
          //  rules={[{ required: true, message: '注册成功，请返回登录页面登录!' }]}
        >
          <Button  type="primary" htmlType="submit" style={{ backgroundColor: "#000",width:'200px' ,height:'40px',borderColor:'#222',marginLeft:'40px'}}>
           <NavLink to='/denglu'>返回登录</NavLink>
           点击注册
          </Button>
        {/* <Routes> <Route path='/i' element={<Zhuce/>}></Route></Routes>  */}
        </Form.Item>
      </Form>
      
    );
  };
  
  export default App;