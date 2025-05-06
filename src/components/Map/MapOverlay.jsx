import React, { useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { coordinatesSelector } from "../../reducers/route";
import { resetCoordinates } from "../../action";

export const MapOverlay = () => {
  const [show, setShow] = useState(false);
  const coordinates = useSelector(coordinatesSelector);
  const dispatch = useDispatch()
  const reset = () => {
    dispatch(resetCoordinates());
  }
  const onclick = (e) => {
    e.preventDefault();
      setShow(show === true);
      reset();
  }
  if (coordinates.length && show === false) {
    return (
      <div className="map__message">
        <h1 className="map__message-title">Заказ размещен</h1>
        <p className="map__message-subtitle">
          {" "}
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </p>
        <div className="profile__button">
          <button
            type="submit"
            className="btn btn--profile"
            onClick={onclick}
          >
            Сделать новый заказ
          </button>
        </div>
      </div>
    );
  }
};
