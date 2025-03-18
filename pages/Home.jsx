import { useGetPatisseriesRemainingQuery } from "../src/store/api";
import { useDispatch } from "react-redux";
import { setRemainingPatisseries } from "../src/store/patisseriesSlice";
import { useEffect } from "react";

const Home = () => {
  const { data, error, isLoading } = useGetPatisseriesRemainingQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setRemainingPatisseries(data.remaining));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur de chargement des pâtisseries.</p>;

  return (
    <div>
      <h1>Page d'accueil</h1>
      <p>Pâtisseries restantes à gagner : {data.remaining}</p>
      <button onClick={() => alert('Lancer le jeu!')}>Lancer le jeu</button>
    </div>
  );
};

export default Home;
