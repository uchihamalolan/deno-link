import { ShortLink } from "../../shortlinks/types.ts";

export function ShortLinkListItem({ link }: { link: ShortLink }) {
  return (
    <div
      key={link.shortCode}
      className="card bg-base-200 hover:bg-base-300 transition-colors"
    >
      <div className="card-body">
        <h3 className="card-title text-primary hover:text-primary-focus">
          <a href={`/links/${link.shortCode}`}>{link.shortCode}</a>
        </h3>
        <p className="text-base-content/70 truncate">
          {link.longUrl}
        </p>
        <div className="flex gap-4 text-sm text-base-content/60">
          <span>
            Created: {new Date(link.createdAt).toLocaleDateString()}
          </span>
          <div className="badge badge-primary">
            {link.clickCount} clicks
          </div>
        </div>
      </div>
    </div>
  );
}
