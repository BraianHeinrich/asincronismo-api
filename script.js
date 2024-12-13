async function buscarPokemon() {
    const pokeNumber = document.getElementById('pokeNumber').value;
    const pokemonCard = document.getElementById('pokemonCard');

    if (!pokeNumber) {
        pokemonCard.textContent = 'Por favor, ingrese un número de Pokémon válido.';
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se encontró el Pokémon');
        }
        const data = await response.json();

        pokemonCard.innerHTML = `
            <h2>${data.name}</h2>
            <p>Tipos: ${data.types.map(type => type.type.name).join(', ')}</p>
            <p>Altura: ${data.height / 10} m</p>
            <p>Peso: ${data.weight / 10} kg</p>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
    } catch (error) {
        console.error('Error al buscar el Pokémon:', error);
        pokemonCard.textContent = 'No se pudo encontrar el Pokémon. Por favor, verifica el número y vuelve a intentarlo.';
    }
}