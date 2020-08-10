import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { queryCache } from "react-query";

import { fetchTotal, fetchArtefacts } from "../../utils/fetch";

import SectionTitleBar from "../../components/SectionTitleBar";
import GalleryModal from "../../components/GalleryModal";

const Gallery = styled.section`
  position: relative;
  display: flex;
`;

const GalleryTitleBar = styled(SectionTitleBar)`
  padding-top: 140px;
`;

const GalleryContent = styled.div`
  padding: 150px 100px 50px 100px;
  width: 100%;
  height: 200vh;

  @media (max-width: 1200px) {
    padding: 150px 75px 50px 75px;
  }

  @media (max-width: 896px) {
    padding: 150px 50px 50px 50px;
  }

  @media (max-width: 600px) {
    padding: 150px 20px 50px 20px;
  }
`;

export async function getStaticProps({ params }) {
  const fetchedArtefact = await fetch(
    `https://the-next-stage.herokuapp.com/api/artefact/${params.id}`
  ).then((res) => res.json());

  return {
    props: {
      artefact: fetchedArtefact.data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "ckdjjdcgb001515vvi0gxucgk" } }],
    fallback: true,
  };
}

const GalleryItemPage = ({ artefact }) => {
  console.log(artefact);
  const router = useRouter();

  useEffect(() => {
    queryCache.prefetchQuery("total", () => fetchTotal());
    queryCache.prefetchQuery(["artefacts", 1], () => fetchArtefacts(1));
  }, []);

  const closeModal = () => {
    router.prefetch("/gallery");
    router.push("/gallery");
  };

  return (
    <Gallery>
      <GalleryTitleBar position="left">gallery</GalleryTitleBar>
      <GalleryContent></GalleryContent>
      <GalleryModal content={artefact} closeHandler={closeModal} />
    </Gallery>
  );
};

export default GalleryItemPage;
