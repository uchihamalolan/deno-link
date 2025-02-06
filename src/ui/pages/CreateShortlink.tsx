import { Layout } from "../common/Layout.tsx";
import { ShortlinkForm } from "../components/ShortLinkForm.tsx";

export function CreateShortlinkPage() {
  return (
    <Layout>
      <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Create a New Shortlink</h2>
          <ShortlinkForm />
        </div>
      </div>
    </Layout>
  );
}
