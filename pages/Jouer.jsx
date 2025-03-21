import { useState } from "react";
import "./Jouer.scss";


const Jouer = () => {
  const [des, setDes] = useState([0, 0, 0, 0, 0]);
  const [essais, setEssais] = useState(3);
  const [gagne, setGagne] = useState(null);


  const lancerDes = () => {
    if (essais > 0) {
      const nouveauxDes = des.map(() => Math.floor(Math.random() * 6) + 1);
      setDes(nouveauxDes);
      setEssais(essais - 1);
      verifierGagnant(nouveauxDes);
    }
  };


  const verifierGagnant = (lancer) => {
    const counts = lancer.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const combinaison = Object.values(counts);

    if (combinaison.includes(3)) {
      setGagne("Brelan - Bravo, vous avez gagné une pâtisserie !");
    } else if (combinaison.includes(4)) {
      setGagne("Carré - Bravo, vous avez gagné deux pâtisseries !");
    } else {
      setGagne("Désolé, vous n'avez pas gagné cette fois.");
    }
  };

  return (
    <div>
      <h1>Jeu de dés 🎲</h1>
      <p>Essais restants : {essais}</p>
      <div>
        {des.map((de, index) => (
          <span key={index} style={{ margin: "0 10px", fontSize: "2rem" }}>
            {de}
          </span>
        ))}
      </div>
      <button onClick={lancerDes} disabled={essais <= 0}>
        Lancer les dés
      </button>
      {gagne && <p>{gagne}</p>}
    </div>
  );
};

export default Jouer;
