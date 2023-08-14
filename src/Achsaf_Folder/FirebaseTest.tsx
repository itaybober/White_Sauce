import React from "react";
import ToggleButton from "@mui/material/ToggleButton";

// @ts-ignore
function FirebaseTest() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      {selected ? "Waiting" : "Ready"}
    </ToggleButton>
  );
}

export default FirebaseTest;
