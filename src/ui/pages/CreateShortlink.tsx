import { Layout } from "../common/Layout.tsx";

export function CreateShortlinkPage() {
  return (
    <Layout>
      <div className="card bg-base-100 shadow-xl max-w-2xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Create a New Shortlink</h2>
          <form action="/links" method="POST" className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Long URL</span>
              </label>
              <input
                type="url"
                name="longUrl"
                required
                placeholder="https://example.com/your-long-url"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Create Shortlink
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
