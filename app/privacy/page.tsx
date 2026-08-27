import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What eudipoa.com collects: as little as possible.",
};

export default function Privacy() {
  return (
    <div className="prose measure">
      <p className="kicker">Privacy</p>
      <h1>Privacy</h1>
      <p className="answer-first">
        This site sets no cookies, runs no analytics, and collects no personal
        data from visitors.
      </p>
      <p>
        There is no advertising, no tracking, and no third-party analytics
        script. If usage measurement is ever added, it will be a
        privacy-preserving, cookieless service (such as Plausible), and this
        page will say so before it happens.
      </p>
      <p>
        The site is hosted on Vercel, whose infrastructure keeps standard
        server logs (IP address, user agent, requested URL) for operating the
        service. We do not enrich, resell, or cross-reference those logs.
      </p>
      <p>
        If you email <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>,
        we keep the correspondence for as long as needed to deal with it, and
        we do not add you to any list.
      </p>
    </div>
  );
}
