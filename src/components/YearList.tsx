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
import styles from "./YearList.module.css";

export type YearListType = {
  className?: string;
};

const YearList: FunctionComponent<YearListType> = ({ className = "" }) => {
  const [frameDropdownAnchorEl, setFrameDropdownAnchorEl] =
    useState<HTMLElement | null>(null);
  const [frameDropdown1AnchorEl, setFrameDropdown1AnchorEl] =
    useState<HTMLElement | null>(null);
  const frameDropdownOpen = Boolean(frameDropdownAnchorEl);
  const handleFrameDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    setFrameDropdownAnchorEl(event.currentTarget);
  };
  const handleFrameDropdownClose = () => {
    setFrameDropdownAnchorEl(null);
  };
  const frameDropdown1Open = Boolean(frameDropdown1AnchorEl);
  const handleFrameDropdown1Click = (event: React.MouseEvent<HTMLElement>) => {
    setFrameDropdown1AnchorEl(event.currentTarget);
  };
  const handleFrameDropdown1Close = () => {
    setFrameDropdown1AnchorEl(null);
  };
  return (
    <div className={[styles.yearList, className].join(" ")}>
      <div className={styles.yearListChild} />
      <div className={styles.secondYear}>
        <Button
          className={styles.secondYearChild}
          endIcon={<img width="22px" height="15px" src="/vector-1.svg" />}
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
        className={styles.parent}
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
          width: "15.716180371352786%",
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
              src="/vector-2.svg"
              style={{ marginRight: "21px" }}
            />
          )}
        >
          <MenuItem>III Year</MenuItem>
        </Select>
        <FormHelperText />
      </FormControl>
      <div className={styles.iiiYearParent}>
        <Button
          id="button-III Year"
          aria-controls="menu-III Year"
          aria-haspopup="true"
          aria-expanded={frameDropdownOpen ? "true" : undefined}
          onClick={handleFrameDropdownClick}
          color="primary"
          sx={{ width: "237", height: "53", backgroundColor: "#fff" }}
        >
          III Year
        </Button>
        <Menu
          anchorEl={frameDropdownAnchorEl}
          open={frameDropdownOpen}
          onClose={handleFrameDropdownClose}
        >
          <MenuItem onClick={handleFrameDropdownClose}>I semister</MenuItem>
          <MenuItem onClick={handleFrameDropdownClose}>II Semister</MenuItem>
        </Menu>
      </div>
      <div className={styles.ivYearParent}>
        <Button
          id="button-IV Year"
          aria-controls="menu-IV Year"
          aria-haspopup="true"
          aria-expanded={frameDropdown1Open ? "true" : undefined}
          onClick={handleFrameDropdown1Click}
          color="primary"
          sx={{ width: "237", height: "100%", backgroundColor: "#fff" }}
        >
          IV Year
        </Button>
        <Menu
          anchorEl={frameDropdown1AnchorEl}
          open={frameDropdown1Open}
          onClose={handleFrameDropdown1Close}
        >
          <MenuItem onClick={handleFrameDropdown1Close}>I Semester</MenuItem>
          <MenuItem onClick={handleFrameDropdown1Close}>II Semester</MenuItem>
        </Menu>
      </div>
      <Button
        className={styles.yearListItem}
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#3652dd",
          fontSize: "20",
          background: "#fff",
          border: "#367cff solid 1px",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { background: "#fff" },
          width: 237,
          height: 53,
        }}
      >
        I Semister
      </Button>
    </div>
  );
};

export default YearList;
