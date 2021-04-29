import { useRouter } from "next/router";
import Comment from "../../components/Comment";
import MainLayout from "../../components/MainLayout";

export default function Article({ post, comments }) {
  const router = useRouter();
  return (
    <MainLayout title={`Next Blog | Article ${router.query.articleId}`}>
      <div className="container pt-3 d-flex flex-column align-items-start">
        <h1 className="big-letter mb-3 mr-5">{post.title}</h1>
        <pre className="big-letter">{post.body}</pre>
        <h4>Comments</h4>
        {comments.map((v, i) => (
          <Comment key={i} name={v.name} body={v.body} email={v.email} />
        ))}
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx) {
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.articleId}`
  );
  const post = await postRes.json();
  const commentsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.articleId}/comments`
  );
  const comments = await commentsRes.json();
  return { props: { post, comments } };
}
