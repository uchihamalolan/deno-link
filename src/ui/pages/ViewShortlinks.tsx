import { Layout } from "../common/Layout.tsx";
import { ShortLinkListItem } from "../components/ShortLinkListItem.tsx";
import { PageProps } from "../types.ts";

export function LinksPage({ shortLinkList }: PageProps) {
  return (
    <Layout>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Your Shortlinks</h2>
          <div className="space-y-4">
            {shortLinkList?.map((link) => (
              link ? <ShortLinkListItem link={link} /> : null
            ))}
          </div>
          {(!shortLinkList || shortLinkList.length === 0) && (
            <div className="alert alert-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>No shortlinks found. Create your first one!</span>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
