import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { AddressContentsInputType, CryptoAddressContents } from "../types";

export default function EditAddress(props: {
  address: string;
  contents: CryptoAddressContents;
  onSave: (params: AddressContentsInputType) => any;
  isUpdatingExisting: boolean;
}) {
  const { address, contents } = props;
  const [addressVal, setAddressVal] = useState(address);
  const [nameVal, setNameVal] = useState(contents.name);

  function save(shouldDelete: boolean) {
    props.onSave({
      address: addressVal,
      contents: { name: nameVal },
      deleteAddress: shouldDelete,
    });
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography variant="caption" paddingBottom={"8px"} paddingTop="4px">
            Type in your trusted addresses.
          </Typography>
          <TextField
            label="Address"
            value={addressVal}
            onChange={(e) => setAddressVal(e.target.value)}
            disabled={props.isUpdatingExisting}
          />
        </Grid>
        <Box m={1} />
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}
          />
        </Grid>
        <br />
        <br />
        <Button onClick={() => save(false)} variant="contained" style={{marginRight:"4px"}}>
          Save
        </Button>
        <Button onClick={() => save(true)} color="error" variant="outlined">
          {props.isUpdatingExisting ? "Delete" : "Cancel"}
        </Button>
        
      </Grid>
    </Grid>
  );
}
