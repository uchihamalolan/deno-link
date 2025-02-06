import { encodeBase64Url } from "jsr:@std/encoding";

export async function generateShortCode(longUrl: string) {
  try {
    new URL(longUrl);
  } catch (error) {
    console.log(error);
    throw new Error("Invalid URL provided");
  }

  // Generate a unique identifier for the URL
  const urlData = new TextEncoder().encode(longUrl + Date.now());
  const hash = await crypto.subtle.digest("SHA-256", urlData);

  // Take the first 8 of the hash for the short URL
  const shortCode = encodeBase64Url(hash.slice(0, 8));

  return shortCode;
}
