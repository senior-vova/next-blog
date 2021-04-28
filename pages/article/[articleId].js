import Router, { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Article({ post }) {
  const router = useRouter();
  const randomNumber = Math.floor(Math.random() * 10);
  const arr = [];
  if (randomNumber <= 0) randomNumber = 3;
  for (let i = 0; i < randomNumber; i++) {
    arr.push(post.body);
  }
  return (
    <MainLayout title={`Next Blog | Article ${router.query.articleId}`}>
      <div className="container pt-3">
        <h1 className="big-letter mb-3">{post.title}</h1>
        {arr &&
          arr.map((v, i) => (
            <pre key={i} className="big-letter">
              {v}
            </pre>
          ))}
      </div>
    </MainLayout>
  );
}

Article.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.articleId}`
  );
  const post = await res.json();
  return { post };
};
