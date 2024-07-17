import { FunctionComponent } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import DefaultComponent from "../components/DefaultComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./Software2.module.css";

const Software2: FunctionComponent = () => {
  return (
    <div className={styles.software3}>
      <div className={styles.learnMore}>Learn more</div>
      <div className={styles.learnMore1}>Learn more</div>
      <FrameComponent1
        uNICOMPANIONAlignSelf="unset"
        uNICOMPANIONWidth="1441.5px"
      />
      <FrameComponent2 />
      <div className={styles.wrapperRectangle2}>
        <img
          className={styles.wrapperRectangle2Child}
          alt=""
          src="/rectangle-2.svg"
        />
      </div>
      <section className={styles.yearContentWrapper}>
        <div className={styles.yearContent}>
          <div className={styles.yearTitle}>
            <div className={styles.secondYear}>
              <Button
                className={styles.secondYearChild}
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
                width: "19.75%",
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
                width: "19.75%",
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
            <FormControl
              className={styles.yearList2}
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
                width: "19.75%",
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
                    src="/vector-5.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>V Year</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <FrameComponent3 />
          <DefaultComponent />
        </div>
      </section>
      <div className={styles.contentBackground} />
      <GroupComponent />
    </div>
  );
};

export default Software2;
