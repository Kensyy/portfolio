export const siteUrl = "https://kensyy.github.io/portfolio/";
export const siteTitle = "Victor Gabriel da Silva | Full-Stack Developer";
export const siteDescription =
  "Full-stack developer portfolio featuring Kyma, Atlas, and PullUp: ITSM tooling, a consumer web app, and a mobile social app.";

export const socialLinks = {
  github: "https://github.com/Kensyy",
  linkedin: "https://www.linkedin.com/in/victorgdskensy/",
  email: "victorkensy@gmail.com",
};

export const repoUrl = "https://github.com/Kensyy/portfolio";

// Static assets referenced outside Next's metadata system (plain <img>/<a>
// tags) need the base path prepended by hand: GitHub Pages project sites
// serve from /portfolio/, and neither of those honors basePath on their own.
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}/${path.replace(/^\//, "")}`;
}
