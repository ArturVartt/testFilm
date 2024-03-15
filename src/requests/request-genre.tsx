import { URL_GENRE } from "./urls/urls";

export default async function requestGenre(token: string) {
  try {
    const response = await fetch(URL_GENRE, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}


