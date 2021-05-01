import MainLayout from "../../components/MainLayout";
import Album from "../../components/Album";
import { GetServerSideProps, GetStaticPaths } from "next";

export default function Albums({ albums }) {
  return (
    <MainLayout title={"Next Blog | Albums"} activeRoute={"albums"}>
      <div className="container pt-3">
        <h1>Albums</h1>
        <div className="row mb-2">
          <div className="col-6">
            <div className="row">
              {albums
                .filter((album) => album.id % 2 === 1)
                .map((v, i) => (
                  <Album key={i} title={v.title} id={v.id} />
                ))}
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              {albums
                .filter((album) => album.id % 2 === 0)
                .map((v, i) => (
                  <Album key={i} title={v.title} id={v.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.API_URL}/albums`);
  const albums = await res.json();
  return {
    props: {
      albums,
    },
  };
};
