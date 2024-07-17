import { FunctionComponent, useState } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Menu,
} from "@mui/material";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./Software3.module.css";

const Software: FunctionComponent = () => {
  const [yearsTitles2AnchorEl, setYearsTitles2AnchorEl] =
    useState<HTMLElement | null>(null);
  const yearsTitles2Open = Boolean(yearsTitles2AnchorEl);
  const handleYearsTitles2Click = (event: React.MouseEvent<HTMLElement>) => {
    setYearsTitles2AnchorEl(event.currentTarget);
  };
  const handleYearsTitles2Close = () => {
    setYearsTitles2AnchorEl(null);
  };
  return (
    <div className={styles.software4}>
      <FrameComponent3 />
      <FrameComponent1 />
      <div className={styles.wrapperRectangle2}>
        <img
          className={styles.wrapperRectangle2Child}
          alt=""
          src="/rectangle-2.svg"
        />
      </div>
      <section className={styles.frameParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <Button
              className={styles.frameItem}
              endIcon={<img width="22px" height="15px" src="/vector-2.svg" />}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "#3652dd",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#3652dd" },
                height: 53,
              }}
            >
              II Year
            </Button>
          </div>
          <FormControl
            className={styles.yearsTitles}
            variant="standard"
            sx={{
              borderColor: "#367cff",
              borderStyle: "SOLID",
              borderTopWidth: "0.5px",
              borderRightWidth: "0.5px",
              borderBottomWidth: "0.5px",
              borderLeftWidth: "0.5px",
              backgroundColor: "#fff",
              borderRadius: "0px 0px 0px 0px",
              width: "15.695364238410598%",
              height: "53px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "53px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "53px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3652dd",
                fontSize: 20,
                fontWeight: "SemiBold",
                fontFamily: "Poppins",
                textAlign: "left",
                p: "0 !important",
                justifyContent: "center",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="22px"
                  height="15px"
                  src="/vector-3.svg"
                  style={{ marginRight: "21px" }}
                />
              )}
            >
              <MenuItem>III Year</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <FormControl
            className={styles.yearsTitles1}
            variant="standard"
            sx={{
              borderColor: "#367cff",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#fff",
              borderRadius: "0px 0px 0px 0px",
              width: "15.695364238410598%",
              height: "53px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "53px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "53px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "53px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#3652dd",
                fontSize: 20,
                fontWeight: "SemiBold",
                fontFamily: "Poppins",
                textAlign: "left",
                p: "0 !important",
                justifyContent: "center",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="22px"
                  height="15px"
                  src="/vector-4.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>IV Year</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className={styles.yearsTitles2}>
            <Button
              id="button-V Year"
              aria-controls="menu-V Year"
              aria-haspopup="true"
              aria-expanded={yearsTitles2Open ? "true" : undefined}
              onClick={handleYearsTitles2Click}
              color="primary"
              sx={{ width: "237", height: "100%", backgroundColor: "#fff" }}
            >
              V Year
            </Button>
            <Menu
              anchorEl={yearsTitles2AnchorEl}
              open={yearsTitles2Open}
              onClose={handleYearsTitles2Close}
            >
              <MenuItem onClick={handleYearsTitles2Close}>I Semester</MenuItem>
              <MenuItem onClick={handleYearsTitles2Close}>II Semester</MenuItem>
            </Menu>
          </div>
        </div>
        <FrameComponent />
      </section>
      <GroupComponent />
    </div>
  );
};

export default Software;
