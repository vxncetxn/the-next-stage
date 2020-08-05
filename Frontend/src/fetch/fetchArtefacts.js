export default function fetchArtefacts(currentPage) {
  return new Promise(async (resolve) => {
    const fetched = await fetch(
      `https://the-next-stage.herokuapp.com/api/artefact?page=${currentPage}`
    ).then((res) => res.json());

    resolve(fetched.data);
  });
}
