const fetchMovie = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=dcb4641c`
  );

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchMovie;
