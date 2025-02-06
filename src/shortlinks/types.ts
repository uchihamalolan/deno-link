export type ShortLink = {
  shortCode: string;
  longUrl: string;
  createdAt: number;
  userId: string;
  clickCount: number;
  lastClickEvent?: string;
};

export type ClickAnalytics = {
  shortUrl: string;
  createdAt: number;
  ipAddress: string;
  userAgent: string;
  country?: string;
};
