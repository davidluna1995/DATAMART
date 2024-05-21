import React, { useState } from "react";
import "./GitHubUser.css";

const GitHubUser = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchGitHubUserData = async () => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      setUserData(userData);
      setRepos(reposData);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    fetchGitHubUserData();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchGitHubUserData();
    }
  };

  return (
    <div className="github-user-container">
      <div className="github-user-form">
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Ingrese su usuario Github"
        />
        <button 
          className="btn btn-primary" 
          onClick={handleSearch} 
          disabled={!username.trim()}
          title={!username.trim() ? 'Ingrese un usuario para buscar' : null}>
          <i className="fas fa-search"></i> Buscar
        </button>
      </div>

      {userData && (
        <div className="github-user-card">
          <div className="github-user-info">
            <img src={userData.avatar_url} alt="Avatar" />
            <div className="github-user-detalle">
              <h2>{userData.login}</h2>
              <p>{userData.bio}</p>
              <p>
                <strong><i class="github-color fas fa-user-plus"></i> Seguidores:</strong> {userData.followers}
              </p>
              <p>
                <strong><i class="github-color fab fa-github"></i> Repositorios Públicos:</strong> {userData.public_repos}
              </p>
            </div>
          </div>
          <div className="github-user-repos">
            <h3>Repositorios Recientes</h3>
            {repos.length > 0 ? (
              <ul>
                {repos.slice(0, 5).map((repo) => (
                  <li key={repo.id}>
                    <strong><i className="github-color fas fa-code-branch"></i> {repo.name}: </strong>
                    <span className={repo.description ? "" : "no-descripcion"}>
                      {repo.description || "No hay descripción disponible"}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-repositorios">No cuenta con repositorios</p>
            )}
          </div>

        </div>
      )}
    </div>
  );
};

export default GitHubUser;
