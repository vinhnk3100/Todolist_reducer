import { useContext } from 'react';
import Context from '../Context/Context';

export const useContextHook = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
