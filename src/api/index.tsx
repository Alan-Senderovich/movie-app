import { IMovieCard } from "@/interfaces";

async function fetchAndCacheData(type: string, page: number) {
  try {
    // Make a request to the API
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();

    // Store the data in the browser's cache
    localStorage.setItem(`${type}_${page}`, JSON.stringify(data));

    // Return the data for use in the application
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}

// Function to get data from cache or make a request to the API
export async function getMovies(type: string, page: number) {
  // Check if the data is stored in the cache
  const cachedData = localStorage.getItem(`${type}_${page}`);

  if (cachedData) {
    // If the data is in the cache, return it for use in the application
    return JSON.parse(cachedData);
  } else {
    // If the data is not in the cache, make a request to the API and store it in the cache
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
