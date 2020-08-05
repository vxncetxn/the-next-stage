export default function fetchArtefacts(artefactId) {
  return new Promise(async (resolve) => {
    const fetched = await fetch(
      `https://the-next-stage.herokuapp.com/api/artefact/${artefactId}`
    ).then((res) => res.json());

    resolve(fetched.data);
  });
}
