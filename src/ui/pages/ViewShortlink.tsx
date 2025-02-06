import { Layout } from "../common/Layout.tsx";
import { ShortLinkDetails } from "../components/ShortLinkDetails.tsx";
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
            {shortLink ? <ShortLinkDetails shortLink={shortLink} /> : null}

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
