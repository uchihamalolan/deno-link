import { ShortLink } from "../shortlinks/types.ts";
import { GitHubUser } from "../user/types.ts";

export interface PageProps {
  user?: GitHubUser | null;
  shortLink?: ShortLink | null;
  shortLinkList?: (ShortLink | null)[];
}
