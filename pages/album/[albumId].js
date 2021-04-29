import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import Photo from "../../components/Photo";

export default function Album({ album, photos }) {
  const router = useRouter();

  const photosPart1 = [];
  const photosPart2 = [];
  const photosPart3 = [];
  const delta = 3;
  const photosCopy = [...photos];
  for (let i = 0; i < photosCopy.length; i += delta) {
    photosPart1.push(photosCopy[i]);
  }
  for (let i = 1; i < photosCopy.length; i += delta) {
    photosPart2.push(photosCopy[i]);
  }
  for (let i = 2; i < photosCopy.length; i += delta) {
    photosPart3.push(photosCopy[i]);
  }

  return (
    <MainLayout title={`Next Blog | Album ${router.query.albumId}`}>
      <div className="container pt-3 d-flex flex-column align-items-start">
        <h1 className="big-letter mb-3 mr-5">{album.title}</h1>
        <pre className="big-letter">{album.body}</pre>
        <h4>Galery</h4>
        <div className="row">
          <div className="col-4">
            <div className="row d-flex justify-content-center">
              {photosPart1.map((v, i) => (
                <Photo key={i} title={v.title} url={v.url} />
              ))}
            </div>
          </div>
          <div className="col-4">
            <div className="row d-flex justify-content-center">
              {photosPart2.map((v, i) => (
                <Photo key={i} title={v.title} url={v.url} />
              ))}
            </div>
          </div>
          <div className="col-4">
            <div className="row d-flex justify-content-center">
              {photosPart3.map((v, i) => (
                <Photo key={i} title={v.title} url={v.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${ctx.query.albumId}`
  );
  const album = await postRes.json();
  const photosRes = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${ctx.query.albumId}/photos`
  );
  const photos = await photosRes.json();
  return { props: { album, photos } };
}
