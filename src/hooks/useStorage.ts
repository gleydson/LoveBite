import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

export default function useStorage<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = AsyncStorage.getItem(key).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err)
    });

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    async function setItem() {
      await AsyncStorage.setItem(key, JSON.stringify(state));
    }
    setItem();
  }, [key, state]);

  return [state, setState];
}
