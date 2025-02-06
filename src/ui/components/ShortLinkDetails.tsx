import { BASE_URL } from "../../constants.ts";
import { ShortLink } from "../../shortlinks/types.ts";

export function ShortLinkDetails({ shortLink }: { shortLink: ShortLink }) {
  return (
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
          {shortLink ? new Date(shortLink.createdAt).toLocaleString() : ""}
        </span>
      </div>
    </div>
  );
}
