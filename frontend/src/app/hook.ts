import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useState } from 'react';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useInput = (initialValue: any) => {
  const [value, onChange] = useState(initialValue);

  return {
    value,
    onChange(e: any) {
      onChange(e.target.value);
    }
  };
};
