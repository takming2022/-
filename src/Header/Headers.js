import React, { useEffect } from "react";
import {
  Header,
  Autocomplete,
  Group,
  Burger,
  createStyles,
  Image,
} from "@mantine/core";
import { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { IconSearch } from "@tabler/icons";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { Grid } from "@mantine/core";
import Header_Login from "../Login/Header_Login";
import { Affix } from "antd";
import { useNavigate } from "react-router-dom";
const useStyles = createStyles((theme) => ({
  header: {
    width: "100%",
    minWidth:"900px",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : "#DCE0E5",
    borderBottom:
      theme.colorScheme === "dark"
        ? "1px solid " + theme.colors.dark[5]
        : "1px solid #738091",
        
  },
  inner: {
  
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("573")]: {},
  },
  link: {
    width: "300px",
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  icon: {
    margin: "auto 10px",
    padding: "0px 0px 0px 0px",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  burger: {
    margin: "0px 10px 0px 0px",
  },
}));
const Headers = ({ Set_Control_Navbar, setopend1, opend1 }) => {
  const history = useNavigate();
  const [top, setTop] = useState(0);
  const [opened, setOpened] = useState(false);
  const [vlaue, setvlaue] = useState("");
  const title = opened ? "Close navigation" : "Open navigation";
  const [colorScheme, setColorScheme] = useLocalStorage({
    //------------------------------------------
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const [dark, setdark] = useState(colorScheme);
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark")); //固定使用者使用的顏色
    setdark(value || (colorScheme === "dark" ? false : true));
  };
  useHotkeys([["mod+J", () => toggleColorScheme()]]); //------------------------------------------
  function search_vlaue(e) {
    setvlaue(e);
  }
  
  const { classes } = useStyles();
  return (
    <Affix offsetTop={top}>
      <Header height={56} mb={0} className={classes.header}>
        <div className={classes.inner}>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <Burger
              className={classes.burger}
              opened={opend1}
              onClick={() => {
                setopend1((o) => !o);
              }} //漢堡按鈕
              title={title}
            />
            {colorScheme === "dark" ? (
              <Image width="50px" src={require("./white_Logo.png")}></Image>
            ) : (
              <Image width="50px" src={require("./black_Logo.png")}></Image>
            )}
          </div>
          <Autocomplete
            className={classes.link}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />} //搜尋框
            data={[]}
            defaultValue={vlaue}
            onChange={search_vlaue}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
              
                if (vlaue != "") {
                  history(`/search/${vlaue.trim()}`);
                }
              } else {
              }
            }}
          />

          <Grid>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "center",
              }}
            >
              <Header_Login /> {/*登入按鈕 */}
              <ActionIcon
                className={classes.icon}
                variant="outline"
                color={dark ? "yellow" : "blue"}
                onClick={() => toggleColorScheme()} //光暗按鈕
                title="Toggle color scheme"
              >
                {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </ActionIcon>
            </div>
          </Grid>
        </div>
      </Header>
    </Affix>
  );
};

export default Headers;
