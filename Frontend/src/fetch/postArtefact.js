import ky from "ky";

export default function postArtefact(submitted) {
  return new Promise(async (resolve) => {
    const returned = await ky
      .post("https://the-next-stage.herokuapp.com/api/artefact", {
        json: submitted,
      })
      .json();

    resolve(returned.data);
  });
}
