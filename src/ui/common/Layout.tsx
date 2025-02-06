import { ComponentChildren } from "npm:preact";

export function Layout({ children }: { children: ComponentChildren }) {
  return (
    <html data-theme="light">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.13/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="icon" type="image/png" href="/static/logo.png" />
      </head>
      <div className="min-h-screen flex flex-col bg-base-100">
        <header className="navbar bg-primary text-primary-content shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primary"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/links">My Links</a>
                </li>
                <li>
                  <a href="/links/new">Create Links</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/links">My Links</a>
              </li>
              <li>
                <a href="/links/new">Create Links</a>
              </li>
            </ul>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="footer footer-center p-4 bg-base-200 text-base-content">
          <aside>
            <p>Copyright © 2024</p>
          </aside>
        </footer>
      </div>
    </html>
  );
}
