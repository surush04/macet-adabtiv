import { useState } from "react";
import "./App.css";
import Switcher from "./components/Switcher";
import { useTranslation } from "react-i18next";
//button
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box, Card } from "@mui/material";
//

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawers from "./components/Drawer";
import BasicAccordion from "./components/BasicAccordion";
import BasicCard from "./components/BasicCard";
import Cards from "./components/Card";

function App() {
  const [lng, setLng] = useState("en");
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
     <Box className="dark:bg-black dark:text-[white]">
     
     
     <Box className="flex items-center gap-3 pt-5">
        <Box>
          <nav className="flex items-center gap-28">
            <img src="src/INNOMA.VC.png" alt="" />
            <p className="sm:hidden">{t("nav")}</p>
            <p className="sm:hidden">{t("nav1")}</p>
            <p className="sm:hidden">{t("nav2")}</p>
            <p className="sm:hidden">{t("nav3")}</p>
            <Box className="sm:hidden">
              <Button variant="contained"> {t("nav4")}</Button>
            </Box>
          
            
            
          </nav>
        </Box>



        <Box className="flex items-center gap-6">
          <Switcher />
          <select
            value={lng}
            onChange={(event) => {
              changeLanguage(event.target.value);
              setLng(event.target.value);
            }}
          >
            <option value="en">Eng</option>
            <option value="ru">Rus</option>
          </select>
        </Box>
        <Box className="hidden sm:block ">
              <Drawers />
            </Box>
      </Box>

      <Box className="pl-[10%] pt-[5%] sm:text-center dark:bg-black dark:text-[white] ">
        <h1 className="text-[43px] font-bold w-[700px] sm:text-[30px] sm:w-[300px]">
          {t("section")}
        </h1>
        <p className="">{t("section1")}</p>
        <br />
        <Button variant="contained">{t("section2")}</Button>
      </Box>

      <Box className="pt-[5%] sm:flex-wrap sm:text-center dark:bg-black dark:text-[white]">
        <p className="text-[36px] text-[#1178B2] pl-[5%]">{t("Section")}</p>
        <Box className="flex justify-evenly items-center pt-[10%] sm:flex-wrap sm:flex-col-reverse">
          <Box>
            <p className="text-[24px text-[#1178B2]">{t("Section1")}</p>
            <p className="w-[600px] sm:w-[300px] text-[20px]">
              {t("Section2")}
            </p>
            <br />
            <Button variant="contained">{t("Section3")}</Button>
          </Box>
          <Box>
            <img
              src="src/kisspng-competitor-analysis-market-research-marketing-quan-5b102810d85456 1.png"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <br />

      <Box className="flex justify-evenly items-center pt-[10%] sm:flex-wrap  sm:text-center dark:bg-black dark:text-[white] dark:shadow-xl dark:shadow-white">
        <Box>
          <img className="dark:rounded-3xl" src="src/rocket 1.png" alt="" />
        </Box>
        <Box>
          <p className="text-[24px text-[#1178B2]">{t("Section1")}</p>
          <p className="w-[600px] sm:w-[300px] text-[20px]">{t("Section2")}</p>
          <br />
          <Button variant="contained">{t("Section3")}</Button>
        </Box>
      </Box>
      <br />

      <Box className="flex gap-16 justify-center dark:bg-black dark:text-[white] sm:flex-wrap">
        <Cards
          num="03"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
        <Cards
          num="04"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
        <Cards
          num="05"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
      </Box>
      <br />

      <Box className="box">
        <h1 className="text-[40px] bg-[#07AF91] w-[1000px] font-bold ml-[13%] sm:w-[350px] sm:ml-[20px] sm:text-[20px]">
          {t("Sect1on")}
        </h1>
        <p className="text-[24px]">{t("Sect1on1")}</p>
        <Button variant="contained">{t("Sect1on2")}</Button>
      </Box>

      <br />

      <Box className="flex gap-10 justify-center sm:flex-wrap">
        <BasicCard />
        <BasicCard />
        <BasicCard />
      </Box>
      <br />
<Box className="flex justify-center">
<img src="src/Group 840.png" alt="" />
</Box>

      <Box>
        <BasicAccordion />
        <BasicAccordion />
        <BasicAccordion />
        
      </Box>



<Box>

<img src="src/Group 815.png" alt="" />

</Box><br />
<Box>

<h1 className="text-[36px] text-[#1178B2] ml-[10%]">Что вы получите в результате?</h1>

</Box><br />
<Box className="flex gap-16 justify-center dark:bg-black dark:text-[white] sm:flex-wrap flex-wrap">
        <Cards
          num="03"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
        <Cards
          num="04"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
        <Cards
          num="05"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
        <Cards
          num="05"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
        <Cards
          num="04"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
        <Cards
          num="05"
          title="IT проекты на стадии идеи"
          desc="Для стартапов, которые планируют привлечь международные инвестиции, протестировать спрос и запустить продукт"
        />
       
      </Box>

      </Box>
    </>
  );
}

export default App;
