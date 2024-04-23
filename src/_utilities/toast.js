import Toast from "react-native-toast-message";

export const customToast = (type, text, visibilityTime) => {
  Toast.show({
    type: type,
    text1: text,
    visibilityTime: visibilityTime,
    topOffset: 55,
  });
};
