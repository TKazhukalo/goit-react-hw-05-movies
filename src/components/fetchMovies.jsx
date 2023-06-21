export const fetchMovies = title => {
    const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';
    const API_KEY = '2161664d4314fc48afed48c009adafff';
    const itemMovies = 'results=title,original_language,poster_path'
    console.log(`${BASE_URL}?api_key=${API_KEY}&${itemMovies}`)
    return fetch(`${BASE_URL}?api_key=${API_KEY}&${itemMovies}`).then(resp => {
        if (!resp.ok) {
            throw new Error(`${resp.status}`);
        } return resp.json()
    });
}