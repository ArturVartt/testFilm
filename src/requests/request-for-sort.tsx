
export default async function requestSort(pages: number) {
  if (!pages) {
    throw new Error('Missing required parameter: pages');
  }
  const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pages}`;

  try {
    const response = await fetch(POPULAR_URL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGM4ZWQyNGNhODMzY2MzMzNlMDMwNGM2ODUzNTMyMyIsInN1YiI6IjY1ZGRmODhmOTAzYzUyMDE2M2JjZGE4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ritO1BP9xHrA1KQCQ7qZe2isAr20BndyEzyefVzcSLA',
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
