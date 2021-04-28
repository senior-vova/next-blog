import MainLayout from "../components/MainLayout";

export default function ErrorPage() {
  return (
    <MainLayout title={"Next Blog | 404"}>
      <div className="error-page">
        <span>404</span>
        <p>Not Found</p>
      </div>
    </MainLayout>
  );
}
