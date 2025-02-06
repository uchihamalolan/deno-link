import { Layout } from "../common/Layout.tsx";

export function NotFoundPage({ shortCode }: { shortCode: string }) {
  return (
    <Layout>
      <div className="hero min-h-[400px]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="py-6">
              Sorry, the shortlink "{shortCode}" doesn't exist.
            </p>
            <a href="/" className="btn btn-primary">Go to Homepage</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
