import { useSelector } from 'react-redux';

// Hook pour vérifier si l'utilisateur est authentifié
const useAuth = () => {
  const user = useSelector((state) => state.auth.user); // Si tu as une slice auth dans Redux
  return user !== null; // Retourne true si l'utilisateur est connecté
};

export default useAuth;
