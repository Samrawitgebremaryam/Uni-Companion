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
import styles from "./Structure1.module.css";

export type Structure1Type = {
  className?: string;
};

const Structure1: FunctionComponent<Structure1Type> = ({ className = "" }) => {
  const [yearList2AnchorEl, setYearList2AnchorEl] =
    useState<HTMLElement | null>(null);
  const yearList2Open = Boolean(yearList2AnchorEl);
  const handleYearList2Click = (event: React.MouseEvent<HTMLElement>) => {
    setYearList2AnchorEl(event.currentTarget);
  };
  const handleYearList2Close = () => {
    setYearList2AnchorEl(null);
  };
  return (
    <section className={[styles.structure, className].join(" ")}>
      <div className={styles.years}>
        <div className={styles.yearsChild} />
        <div className={styles.structure1}>
          <Button
            className={styles.structureChild}
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
          className={styles.yearList}
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
          className={styles.yearList1}
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
        <div className={styles.yearList2}>
          <Button
            id="button-V Year"
            aria-controls="menu-V Year"
            aria-haspopup="true"
            aria-expanded={yearList2Open ? "true" : undefined}
            onClick={handleYearList2Click}
            color="primary"
            sx={{ width: "237", height: "100%", backgroundColor: "#fff" }}
          >
            V Year
          </Button>
          <Menu
            anchorEl={yearList2AnchorEl}
            open={yearList2Open}
            onClose={handleYearList2Close}
          >
            <MenuItem onClick={handleYearList2Close}>I Semester</MenuItem>
            <MenuItem onClick={handleYearList2Close}>II Semester</MenuItem>
          </Menu>
        </div>
      </div>
    </section>
  );
};

export default Structure1;
