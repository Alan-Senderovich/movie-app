import { IMovieCard } from "@/interfaces";

async function fetchAndCacheData(type: string, page: number) {
  try {
    // Realizar la solicitud a la API
    const response = await fetch(
      // `https://api.themoviedb.org/3/movie/${type}?api_key=4f298a53e552283bee957836a529baec&language=en-US&page=${page}`
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();

    // Almacenar los datos en la caché del navegador
    localStorage.setItem(`${type}_${page}`, JSON.stringify(data));

    // Retornar los datos para su uso en la aplicación
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    throw error;
  }
}

// Función para obtener los datos desde la caché o realizar una solicitud a la API
export async function getMovies(type: string, page: number) {
  // Verificar si los datos están almacenados en la caché
  const cachedData = localStorage.getItem(`${type}_${page}`);

  if (cachedData) {
    // Si los datos están en la caché, devolverlos para su uso en la aplicación
    return JSON.parse(cachedData);
  } else {
    // Si los datos no están en la caché, realizar una solicitud a la API y almacenarlos en la caché
    return fetchAndCacheData(type, page);
  }
}

export async function getMovieDetails(id: IMovieCard["id"]) {
  const cachedData = localStorage.getItem(`${id}`);

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    const data = await response.json();
    localStorage.setItem(`${id}`, JSON.stringify(data));
    return data;
  }

}

export async function getMovieCasts(id: IMovieCard["id"]) {
  const cachedData = localStorage.getItem(`${id}-credits`);

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    const data = await response.json();
    localStorage.setItem(`${id}-credits`, JSON.stringify(data));
    return data;
  }

}