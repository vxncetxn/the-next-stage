export default function fetchTotal() {
  return new Promise(async (resolve) => {
    const fetched = await fetch(
      "https://the-next-stage.herokuapp.com/api/artefacts/count"
    ).then((res) => res.json());

    resolve(fetched.data);
  });
}
