import { kv } from "../db/kv.ts";
import { ShortLink } from "./types.ts";

export async function getShortLink(shortCode: string) {
  const link = await kv.get<ShortLink>(["shortlinks", shortCode]);
  return link.value;
}

export async function getAllLinks() {
  const list = kv.list<ShortLink>({ prefix: ["shortlinks"] });
  const res = await Array.fromAsync(list);
  const linkValues = res.map((v) => v.value);
  return linkValues;
}

export async function storeShortLink(
  longUrl: string,
  shortCode: string,
  userId: string,
) {
  const shortLinkKey = ["shortlinks", shortCode];
  const data: ShortLink = {
    shortCode,
    longUrl,
    userId,
    createdAt: Date.now(),
    clickCount: 0,
  };

  const userKey = [userId, shortCode];

  const res = await kv.atomic()
    .set(shortLinkKey, data)
    .set(userKey, shortCode)
    .commit();

  return res;
}

export function watchShortLink(shortCode: string) {
  const shortLinkKey = ["shortlinks", shortCode];
  const shortLinkStream = kv.watch<ShortLink[]>([shortLinkKey]).getReader();
  return shortLinkStream;
}
