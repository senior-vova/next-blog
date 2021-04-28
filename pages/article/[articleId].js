import Router, { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

export default function Article() {
  const router = useRouter();
  return (
    <MainLayout title={`Next Blog | Article ${router.query.articleId}`}>
      <div className="container pt-3">
        <h1>This is {router.query.articleId} Article</h1>
        <button
          onClick={() => {
            Router.push("/");
          }}
        >
          Go to Home page
        </button>
      </div>
    </MainLayout>
  );
}
