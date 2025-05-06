import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  makeStyles,
  FormControl,
  InputLabel,
} from "@material-ui/core/";
import { addressesSelector } from "../../reducers/addressList";
import { getRoute } from "../../action";
import { MapSelect } from "./MapSelect";

import { getAddressList } from "../../action";

const useFormStyles = makeStyles(() => ({
  formControl: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "25px",
    padding: "15px",
    top: "40px",
    left: "5%",
    width: "300px",
    zIndex: "50",
    background: "#fff",
    borderRadius: "5%",
    gap: "20px",
    "&:first-child": {
      marginBottom: "8px",
    },
  },

  button: {
    border: "none",
    fontSize: "21px",
    borderRadius: "70px",
    backgroundColor: "#fdbf5a",
    cursor: "pointer",
    padding: "5px 95px",
    "&:hover": {
      backgroundColor: "#ffa842",
      transition: "background-color 0.2s",
    },
  },
}));

export const MapForm = (props) => {
  const dispatch = useDispatch();

  const add = useSelector(addressesSelector);
  const classes = useFormStyles();
  useEffect(() => {
    dispatch(getAddressList());
  }, []);


  const [route, setRouter] = useState({ address1: "", address2: "" });

  const onChange = (event) => {
    let input = event.target;
    setRouter({ ...route, [input.name]: input.value });
  };

  const onButtonClick = () => {
    dispatch(getRoute(route));
  };

  return (
    <>
      <div className={classes.formControl}>
        <FormControl>
          <InputLabel htmlFor="from">Откуда</InputLabel>
          <MapSelect
            addressKey="address1"
            otherAddress={route.address2}
            onChange={onChange}
            route={route}
            values={add}
          ></MapSelect>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="to">Куда</InputLabel>
          <MapSelect
            addressKey="address2"
            otherAddress={route.address1}
            onChange={onChange}
            route={route}
            values={add}
          >
            Куда
          </MapSelect>
        </FormControl>
        <Button className={classes.button} onClick={onButtonClick}>
          Заказать
        </Button>
      </div>
    </>
  );
};
