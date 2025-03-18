import { useState } from "react";
import { useLoginMutation } from "../src/store/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      console.log(response);
      // Si la connexion est réussie, rediriger vers la page d'administration ou autre
      navigate("/admin");
    } catch (err) {
      console.error("Erreur de connexion", err);
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Chargement..." : "Se connecter"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Erreur : {error.message}</p>}
    </div>
  );
};

export default Login;
