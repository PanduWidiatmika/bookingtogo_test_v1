import React from "react";
import DropDownPicker from "react-native-dropdown-picker";

const CustomDropDownPicker = ({
  index,
  openState,
  setOpenState,
  value,
  setValue,
  items,
  inputData,
  setInputData,
}) => {
  const handleValueChange = (newValue) => {
    // console.log("New Value:", newValue);
    const newInputData = [...inputData];
    newInputData[index].prefix = newValue;
    setInputData(newInputData);
    const newOpenState = [...openState];
    newOpenState[index] = false;
    setOpenState(newOpenState);
    setValue(newValue);
  };

  return (
    <DropDownPicker
      open={openState[index]}
      value={value}
      items={items}
      setOpen={(open) => {
        const newOpenState = [...openState];
        newOpenState[index] = open;
        setOpenState(newOpenState);
      }}
      onChangeItem={(item) => {
        handleValueChange(item.value);
      }}
      containerStyle={{ width: "25%", zIndex: openState[index] ? 1 : 0 }}
      onClose={() => {
        const newOpenState = [...openState];
        newOpenState[index] = false;
        setOpenState(newOpenState);
      }}
      closeOnTouchOutside={true}
      disabled
    />
  );
};

export default CustomDropDownPicker;
