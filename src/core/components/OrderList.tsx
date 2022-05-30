import React from "react";
import { Grid } from "@mui/material";
import TextGroup from "./TextGroup";
import PropTypes from "prop-types";

const ComponentPropTypes = {
  data: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
};

type MyComponentProps = PropTypes.InferProps<typeof ComponentPropTypes>;

const OrderList: React.FC<MyComponentProps> = ({ data, label }) => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h3 className="order-view-container-title">{label}</h3>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {Object.entries(data).map((res: any, i: number) => (
          <Grid key={res[0]} item xs={4}>
            <TextGroup label={res[0]} value={res[1]} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default React.memo(OrderList);
