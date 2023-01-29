import React from 'react'
import './Registerimage.css'
import { Upload, Button, message, UploadProps } from 'antd';
import { Divider } from 'antd'
import { useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { create, CID } from "ipfs-http-client";
const Registerimage = () => {
  const [fileList, setFileList] = useState([]);
  const [fileListbase64, setFileListbase64] = useState([]);
  const [mode, setMode] = useState(false);
  const [test, settest] = useState()
  var aa = []
  var bb = 0;
  async function ipfsupload(file)  {
    var ipfs = create(new URL("http://127.0.0.1:5001"));
    // upload files
    const result = await ipfs.add(file);
    console.log(result);
    console.log(result.cid);
    console.log(result.path);
    return result.path;
  };
  const uploadProps =  {

    listType: "picture-card",
    multiple: mode,
    fileList,
    beforeUpload: async(file, filesArray) => {
      let count = 0;
        
      const url  =await ipfsupload(file);
      console.log("url",url);
      file['url'] = "http://127.0.0.1:8081/ipfs/"+url;

      console.log(file);
      let files = filesArray.filter((file) => {
        const isPNG = file.type === 'image/png';
        !isPNG && count++;
        return isPNG;
      });
      bb++;
      if (count > 0) {
        message.error(`請上傳png檔`);
        return false;
      }
      if (fileList.length > 2) {
        message.error(`最多上傳3張圖片`);
        return false;
      }
      if (mode) {
        setFileList(files)
      } else {
        console.log(fileList.length);
        setFileList((prev) => {
          let newFiles = [...prev];
          newFiles.push(file);
          return newFiles;
        });
      }
      return true;
    },
    onRemove: (file) => {
      setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
    }
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 2,
        }}
      >
        Upload
      </div>
    </div>
  );
  async function OKK() {
    console.log(fileList);
  }
  // const [fileList, setFileList] = useState([]);
  // const [fileListbase64, setFileListbase64] = useState([]);
  // const [mode, setMode] = useState(false);
  // const [test, settest] = useState()
  // var aa = []
  // var bb = 0;
  // function getBase64(obj) {

  //   const image = obj; //获取文件域中选中的图片
  //   let reader = new FileReader(); //实例化文件读取对象
  //   reader.readAsDataURL(image); //将文件读取为 DataURL,也就是base64编码
  //   reader.onload = function (ev) { //文件读取成功完成时触发
  //     let dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
  //     settest(dataURL)
  //     return dataURL

  //   }
  // }
  // const uploadProps = {

  //   listType: "picture-card",
  //   multiple: mode,
  //   fileList,
  //   beforeUpload: (file, filesArray) => {
  //     let count = 0;
  //     const image = file; //获取文件域中选中的图片
  //     let reader = new FileReader(); //实例化文件读取对象
  //     reader.readAsDataURL(image); //将文件读取为 DataURL,也就是base64编码
  //     reader.onload = function (ev) { //文件读取成功完成时触发
  //       let dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
  //       console.log(dataURL);
  //       file['url'] = dataURL

  //     }
  //     console.log(file);
  //     let files = filesArray.filter((file) => {
  //       const isPNG = file.type === 'image/png';
  //       !isPNG && count++;
  //       return isPNG;
  //     });
  //     bb++;
  //     if (count > 0) {
  //       message.error(`請上傳png檔`);
  //       return false;
  //     }
  //     if (fileList.length > 2) {
  //       message.error(`最多上傳3張圖片`);
  //       return false;
  //     }
  //     if (mode) {
  //       setFileList(files)
  //     } else {
  //       console.log(fileList.length);
  //       setFileList((prev) => {
  //         let newFiles = [...prev];
  //         newFiles.push(file);
  //         return newFiles;
  //       });
  //     }
  //     return true;
  //   },
  //   onRemove: (file) => {
  //     setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
  //   }
  // };
  // const uploadButton = (
  //   <div>
  //     <PlusOutlined />
  //     <div
  //       style={{
  //         marginTop: 2,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );
  return (
    <div style={{}}>
    <Divider orientation="left">商品圖片</Divider>
    <div style={{display: 'flex',height:'150px', borderRadius:'20px',border: '1px ridge rgba(0, 0, 0, 0.3)'}}>
      <div className='updatediv' >
        
        <Upload  {...uploadProps} >
          {fileList.length > 2 ? null : uploadButton}
        </Upload>
      </div>
      <button onClick={OKK}>OKK</button>
    </div>
    </div>

  );
}

export default Registerimage