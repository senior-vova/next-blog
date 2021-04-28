import MainLayout from "../../components/MainLayout";

export default function Articles() {
  return (
    <MainLayout title={"Next Blog | Articles"} activeRoute={"articles"}>
      <div className="container pt-3">
        <h1>Articles</h1>
      </div>
    </MainLayout>
  );
}
