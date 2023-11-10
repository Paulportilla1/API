interface Character {
    id: number;
    fullname: string;
    address: string;
  }
  
  const url = "http://localhost:8081/Students";
  
  async function fetchCharacters() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`);
      }
      const data: Character[] = await response.json();
      displayCharacters(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  
  function displayCharacters(characters: Character[]) {
    const container = document.getElementById('characters-container');
    if (container) {
      container.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos elementos
      characters.forEach(character => {
        container.innerHTML += `
          <div class="character-card">
            <h2>ID: ${character.id}</h2>
            <p>fullname: ${character.fullname}</p>
            <p>address: ${character.address}</p>
          </div>
        `;
      });
    }
  }
  
  fetchCharacters();
  