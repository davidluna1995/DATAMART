import React, { useState } from 'react';
import './GitHubUser.css'

const GitHubUser = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchGitHubUserData = async () => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      setUserData(userData);
      setRepos(reposData);

    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    fetchGitHubUserData();
  };

  return (
    <div className="github-user-container">
      <div className="github-user-form">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Ingrese su usuario Github"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {userData && (
        <div className="github-user-card">
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <h2>{userData.login}</h2>
          <p>{userData.bio}</p>
          <p>Seguidores: {userData.followers}</p>
          <p>Repositorios Públicos: {userData.public_repos}</p>
          <h3>Repositorios Recientes</h3>
          <ul>
            {repos.slice(0, 5).map((repo) => (
              <li key={repo.id}>
                <strong>{repo.name}</strong>: {repo.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GitHubUser;
