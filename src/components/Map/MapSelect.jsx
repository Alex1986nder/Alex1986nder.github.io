import React from "react";

import { Select, MenuItem } from "@material-ui/core/";

export const MapSelect = (props) => {
  const { otherAddress, values, addressKey, route, onChange } = props;

  const availableAddresses = values
    .filter((item) => item !== otherAddress)
    .map((addressItem) => (
      <MenuItem key={addressItem} value={addressItem}>
        {addressItem}
      </MenuItem>
    ));

  return (
    <Select
      value={route[addressKey]}
      onChange={onChange}
      inputProps={{ name: addressKey, id: addressKey }}
      data-testid={addressKey}
    >
      {availableAddresses}
    </Select>
  );
};
