import { createGitHubOAuthConfig, createHelpers } from "jsr:@deno/kv-oauth";
import { pick } from "jsr:@std/collections/pick";
import { GitHubUser } from "../user/types.ts";
import { getUser, storeUser } from "../user/user.ts";

const oauthConfig = createGitHubOAuthConfig({
  redirectUri: Deno.env.get("REDIRECT_URI"),
});

const {
  handleCallback,
  getSessionId,
  signIn,
  signOut,
} = createHelpers(oauthConfig);

export async function getCurrentUser(req: Request) {
  const sessionId = await getSessionId(req);
  return sessionId ? await getUser(sessionId) : null;
}

export async function getGitHubProfile(accessToken: string) {
  const response = await fetch("https://api.github.com/user", {
    headers: { authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    response.body?.cancel();
    throw new Error("Failed to fetch GitHub user");
  }

  return response.json() as Promise<GitHubUser>;
}

export async function handleGithubCallback(req: Request) {
  const { response, tokens, sessionId } = await handleCallback(req);
  const userData = await getGitHubProfile(tokens?.accessToken);
  const filteredData = pick(userData, ["avatar_url", "html_url", "login"]);
  await storeUser(sessionId, filteredData);
  return response;
}

export { signIn, signOut };
