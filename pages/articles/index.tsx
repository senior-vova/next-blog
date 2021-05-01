import { GetStaticProps } from "next";
import MainLayout from "../../components/MainLayout";
import Post from "../../components/Post";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};

export default function Articles({ posts }) {
  return (
    <MainLayout title={"Next Blog | Articles"} activeRoute={"articles"}>
      <div className="container pt-3">
        <h1>Articles</h1>
        <div className="row mb-2">
          <div className="col-6">
            <div className="row">
              {posts
                .filter((post: any) => post.id % 2 === 1)
                .map((v: any, i: number) => (
                  <Post key={i} title={v.title} body={v.body} id={v.id} />
                ))}
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              {posts
                .filter((post: any) => post.id % 2 === 0)
                .map((v: any, i: number) => (
                  <Post key={i} title={v.title} body={v.body} id={v.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
