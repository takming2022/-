import { useEffect, useState } from "react";
import { createStyles, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Mid_Search_Card from "./Mid_Search_Card";
import { useParams } from "react-router-dom";
import { abi, address } from "../Contract/Contract";
import { ethers } from "ethers";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : "#E5E8EB",
    padding: "13px 0px 0px 0px",
  },
  Carousel_div: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#E5E8EB",
    margin: "10px 0px 0px 0px",
    height: window.innerWidth < 500 ? 226 : 326,
    borderBottom:
      theme.colorScheme === "dark"
        ? "1px solid " + theme.colors.dark[5]
        : "1px solid #EDEFF2",
    borderTop:
      theme.colorScheme === "dark"
        ? "1px solid " + theme.colors.dark[5]
        : "1px solid #EDEFF2",
  },
}));
const Mid_Search = () => {
  const { word } = useParams();
  const { classes } = useStyles();
  const [search_card, setSearch_card] = useState();
  const [usewidth, setusewidth] = useState(window.innerWidth);
  function hidden(str) {
    return str.substring(0, 6) + "...." + str.substring(str.length - 4);
  }
  async function doSearch() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contractInstance_provider = new ethers.Contract(
      address,
      abi,
      provider
    );
    let api = await contractInstance_provider.romms_length();
    let room_long = parseInt(api, 16);
    console.log(room_long);
    let Room_IdName = [];
    let Room_IdName_arr = [];
    for (let i = 0; i < room_long; i++) {
      Room_IdName = await contractInstance_provider.getroomscard(i);
      console.log(Room_IdName);
      if (Room_IdName[1].includes(word)) {
        Room_IdName_arr.push(
          <Mid_Search_Card
            id={Room_IdName[4]}
            title_room_name={Room_IdName[1]} //name
            describe="刊登者:"
            describe_wallet_addr={hidden(Room_IdName[0])} //address
            image={Room_IdName[2][0]} //image //name
          />
        );
      }
    }
    setSearch_card(Room_IdName_arr);
  }
  useEffect(() => {
    doSearch();
  }, [word]);
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.Carousel_div}>
        <Carousel
          className={classes.root}
          slideSize="80%"
          height={usewidth < 500 ? 200 : 300}
          slideGap="xs"
          controlsOffset="xs"
          dragFree
          withIndicators
        >
          <Carousel.Slide
            key={
              "https://www.uwood.com.tw/userfiles/case/35220211101143019.jpg"
            }
          >
            <Image
              height="300px"
              src={
                "https://www.uwood.com.tw/userfiles/case/35220211101143019.jpg"
              }
            />
          </Carousel.Slide>
          <Carousel.Slide
            key={
              "https://images.hhh.com.tw/uploads/_hcolumn/point01_337_05.jpg"
            }
          >
            <Image
              height="300px"
              src={
                "https://images.hhh.com.tw/uploads/_hcolumn/point01_337_05.jpg"
              }
            />
          </Carousel.Slide>
          <Carousel.Slide
            key={
              "https://ciaocasa.com.tw/uploads/97b02b7a-f484-4042-8689-a1cc681b854e-%E4%B8%BB%E5%9C%96.jpg"
            }
          >
            <Image
              height="300px"
              src={
                "https://ciaocasa.com.tw/uploads/97b02b7a-f484-4042-8689-a1cc681b854e-%E4%B8%BB%E5%9C%96.jpg"
              }
            />
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className="container">{search_card}</div>
    </div>
  );
};

export default Mid_Search;
