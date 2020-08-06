export default function fetchDonor(key) {
  return new Promise(async (resolve) => {
    const fetched = await fetch(
      `https://the-next-stage.herokuapp.com/api/magic/${key}`
    ).then((res) => res.json());

    resolve(fetched.data);
  });
}
