import React from "react";
import Terminator from "../terminator/terminator.component";
const TerminatorList = ({ models }) => {
  const terminatorComponents = models.map((model) => {
    return (
      <Terminator
        key={model.id}
        id={model.id}
        name={model.name}
        serialnumber={model.serialNumber}
      />
    );
  });
  return <div>{terminatorComponents}</div>;
};

export default TerminatorList;
