import React from 'react'
import Registerimage from './Registerimage'
import { Upload, Button, message, UploadProps } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import Register_detil from './Register_detil';
import './Register.css'
const Register = () => {
  return (
    <div>
        <Registerimage />
        <Register_detil />
        <div className='check'>
        <Button  type="primary" icon={<CheckCircleOutlined />} size={'large'}>
          確定刊登
        </Button>
      </div>
    </div>
  )
}

export default Register