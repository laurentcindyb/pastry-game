import { useSelector } from 'react-redux';

const useAuth = () => {
  const user = useSelector((state) => state.auth.user);
  return user !== null; 
};

export default useAuth;
