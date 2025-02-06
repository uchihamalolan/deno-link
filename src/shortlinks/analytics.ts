import { kv } from "../db/kv.ts";
import { ClickAnalytics, ShortLink } from "./types.ts";

export async function getClickEvent(shortCode: string, clickId: number) {
  const analytics = await kv.get<ClickAnalytics>([
    "analytics",
    shortCode,
    clickId,
  ]);
  return analytics.value;
}

export async function incrementClickCount(
  shortCode: string,
  data?: Partial<ClickAnalytics>,
) {
  const shortLinkKey = ["shortlinks", shortCode];
  const shortLink = await kv.get(shortLinkKey);
  const shortLinkData = shortLink.value as ShortLink;

  const newClickCount = shortLinkData?.clickCount + 1;

  const analyicsKey = ["analytics", shortCode, newClickCount];
  const analyticsData = {
    shortCode,
    createdAt: Date.now(),
    ...data,
    // ipAddress: "192.168.1.1",
    // userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    // country: "United States"
  };

  const res = await kv.atomic()
    .check(shortLink)
    .set(shortLinkKey, {
      ...shortLinkData,
      clickCount: newClickCount,
    })
    .set(analyicsKey, analyticsData)
    .commit();

  if (!res.ok) {
    console.error("Error recording click!");
  }

  return res;
}
