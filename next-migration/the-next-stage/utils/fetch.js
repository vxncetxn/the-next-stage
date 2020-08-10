export function fetchTotal() {
  return new Promise(async (resolve) => {
    const fetched = await fetch(
      "https://the-next-stage.herokuapp.com/api/artefacts/count"
    ).then((res) => res.json());

    resolve(fetched.data);
  });
}

export function fetchArtefacts(currentPage) {
  return new Promise(async (resolve) => {
    const fetched = await fetch(
      `https://the-next-stage.herokuapp.com/api/artefact?page=${currentPage}`
    ).then((res) => res.json());

    resolve(fetched.data);
  });
}

export function fetchDonor(key) {
  return new Promise(async (resolve) => {
    const fetched = await fetch(
      `https://the-next-stage.herokuapp.com/api/magic/${key}`
    ).then((res) => res.json());

    resolve(fetched.data);
  });
}
