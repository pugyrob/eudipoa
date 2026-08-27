import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer mt-20">
      <div className="mx-auto max-w-3xl px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-[1.6fr_1fr]">
          <div className="space-y-3">
            <p>
              <strong>eudipoa.com</strong> is an independent handbook on the
              digital EU power of attorney and organisational mandates. It is
              not the European Commission, ENISA, a Member State authority, or
              EUR-Lex, and it is not affiliated with any of them. It does not
              issue wallets, trust marks, or any notified or qualified service.
            </p>
            <p>
              Nothing here is legal advice, and this site is not a substitute
              for the Official Journal of the European Union or for national
              law. Where this site and the Official Journal differ, the
              Official Journal is right.
            </p>
            <p>
              Written and self-funded by the operator of{" "}
              <a href="https://mandate-rail.com" rel="noopener">
                Mandate Rail
              </a>
              , a product for organisational mandates. No advertisers, no
              sponsors. Full disclosure: <Link href="/about">About</Link>.
            </p>
          </div>
          <div>
            <p className="footer-heading">This site</p>
            <nav className="grid gap-1.5">
              <Link href="/about">About</Link>
              <Link href="/methodology">Methodology</Link>
              <Link href="/sources">Sources</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/corrections">Corrections</Link>
              <Link href="/changelog">Changelog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
