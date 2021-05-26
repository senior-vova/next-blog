import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { useRouter } from "next/router";
import Comment from "../../components/Comment";
import MainLayout from "../../components/MainLayout";

interface GSSPI extends GetServerSidePropsContext {
  params: {
    id: string | null;
  };
}

// interface GSSPI extends GetStaticPropsContext {
//   params: {
//     id: string | null;
//   };
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = [];
//   for (let index = 1; index <= 100; index++) {
//     paths.push({ params: { id: index.toString() } });
//   }
//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }: GSSPI) => {
//   const postRes = await fetch(`${process.env.API_URL}/posts/${params.id}`);
//   const post = await postRes.json();
//   const commentsRes = await fetch(
//     `${process.env.API_URL}/posts/${params.id}/comments`
//   );
//   const comments = await commentsRes.json();
//   return { props: { post, comments } };
// };

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GSSPI) => {
  const postRes = await fetch(`${process.env.API_URL}/posts/${params.id}`);
  const post = await postRes.json();
  const commentsRes = await fetch(
    `${process.env.API_URL}/posts/${params.id}/comments`
  );
  const comments = await commentsRes.json();
  return { props: { post, comments } };
};

export default function Article({ post, comments }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading ...</h1>;

  return (
    <MainLayout
      title={`Next Blog | Article ${router.query.articleId}`}
      activeRoute=""
    >
      <div className="container pt-3 d-flex flex-column align-items-start">
        <h1 className="big-letter mb-3 mr-5">{post.title}</h1>
        <pre className="big-letter">{post.body}</pre>
        <h4>Comments</h4>
        {comments.map((v: any, i: number) => (
          <Comment key={i} name={v.name} body={v.body} email={v.email} />
        ))}
      </div>
    </MainLayout>
  );
}
