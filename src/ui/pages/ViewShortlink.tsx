import { BASE_URL } from "../../constants.ts";
import { Layout } from "../common/Layout.tsx";
import { PageProps } from "../types.ts";

export function ShortlinkViewPage({ shortLink }: PageProps) {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Clicks</div>
            <div className="stat-value" id="clickCount">
              {shortLink?.clickCount}
            </div>
            <div className="stat-desc">Updated in realtime</div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Shortlink Details</h2>
            <div className="divider"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Short URL</span>
                </label>
                <a
                  href={`/${shortLink?.shortCode}`}
                  target="_blank"
                  className="link link-primary"
                >
                  {`${BASE_URL}/${shortLink?.shortCode}`}
                </a>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Long URL</span>
                </label>
                <a
                  href={shortLink?.longUrl}
                  className="link link-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {shortLink?.longUrl}
                </a>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Created At</span>
                </label>
                <span>
                  {shortLink
                    ? new Date(shortLink.createdAt).toLocaleString()
                    : ""}
                </span>
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <a
                target="_blank"
                href={`/realtime/${shortLink?.shortCode}`}
                className="btn btn-primary"
              >
                View Realtime Analytics
              </a>
            </div>
          </div>
        </div>
      </div>

      <script src="/static/realtime.js"></script>
    </Layout>
  );
}
