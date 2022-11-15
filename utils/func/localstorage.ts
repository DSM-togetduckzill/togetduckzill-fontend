import { isClient } from "./verifyClient";

type LocalstorageKeyType = "chatList";

const getData = (key: LocalstorageKeyType) => {
  isClient();
  return window.localStorage.getItem(key)!;
};

const setData = (key: LocalstorageKeyType, setValue: any) => {
  isClient();
  window.localStorage.setItem(key, setValue);
};

const localstorage = {
  getData,
  setData,
};

export default localstorage;
