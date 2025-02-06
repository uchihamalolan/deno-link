import { Layout } from "../common/Layout.tsx";
import { PageProps } from "../types.ts";

export function HomePage({ user }: PageProps) {
  return (
    <Layout>
      <div className="hero min-h-[500px] bg-base-200 rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Welcome to link.thiswont.work
            </h1>
            <p className="py-6">
              link.thiswont.work is a Deno-powered URL shortening service.
              Create, manage, and track your links with enterprise-grade tools.
            </p>
            {user
              ? (
                <div className="space-y-4">
                  <div className="text-lg">Welcome back, {user.login}!</div>
                  <div className="space-x-4">
                    <a href="/links/new" className="btn btn-primary">
                      Create New Link
                    </a>
                    <a
                      href="/oauth/signout"
                      className="btn btn-outline btn-error"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              )
              : (
                <a href="/oauth/signin" className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mr-2 fill-current"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Sign In with GitHub
                </a>
              )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
