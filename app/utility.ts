const URL = process.env.NEXT_PUBLIC_API_URL;

export async function getMovies() {
  console.log("Fetching movies...");

  const response = await fetch(`${URL}/movies`);
  return response.json();
}

export async function getMovie(id: string) {
  console.log(`Fetching movie ${id}...`);

  const response = await fetch(`${URL}/movies/${id}`);
  return response.json();
}

export async function getVideos(id: string) {
  console.log(`Fetching videos for movie ${id}...`);

  const response = await fetch(`${URL}/movies/${id}/videos`);
  return response.json();
}
