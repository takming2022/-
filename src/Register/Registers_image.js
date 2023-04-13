import { useState,useEffect,useRef } from 'react';
import { FileButton, Button, Group, Text, List } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { create, CID } from "ipfs-http-client";
const Registers_image =({files,setFiles}) => {
  const openRef = useRef(null);
  async function ipfsupload(file)  {
    console.log(file);
    var ipfs = create(new URL("http://192.192.140.228:5001"));
    // upload files
    const result = await ipfs.add(file);
    // console.log(result);
    // console.log(result.cid);
    // console.log(result.path);
    const url =result.path
    file['url'] = "http://192.192.140.228:8080/ipfs/"+url;
    console.log(file);
    setFiles((prev) => {
      let newFiles = [...prev];
      newFiles.push(file);
      return newFiles;
    });
    return result.path;
  };
  
  async function upfiles(e){
    setFiles([])
    console.log(e);
    e.map((item) => {
      ipfsupload(item)

    })
    
  }
  const clearFile = () => {
    setFiles([]);
  };
  return (
    <>
          <Dropzone
        openRef={openRef}
        onDrop={() => {}}
        activateOnClick={false}
        styles={{ inner: { pointerEvents: 'all' } }}
      >
      <Group position="center">
        <FileButton onChange={(e) =>upfiles(e)} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!files} color="red" onClick={clearFile}>Reset</Button>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <List size="sm" mt={5} withPadding>
        {files.map((file, index) => (
          <List.Item key={index}><a   target="_blank" href={file.url}>{file.name}</a></List.Item>
        ))}
      </List>
      </Dropzone>
    </>
  );
}
export default Registers_image