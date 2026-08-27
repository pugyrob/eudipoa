import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer mt-16">
      <div className="mx-auto max-w-3xl px-5 py-8 space-y-3">
        <p>
          <strong>eudipoa.com</strong> is an independent handbook on the digital
          EU power of attorney and organisational mandates. It is not the
          European Commission, ENISA, a Member State authority, or EUR-Lex, and
          it is not affiliated with any of them. It does not issue wallets,
          trust marks, or any notified or qualified service.
        </p>
        <p>
          Nothing here is legal advice, and this site is not a substitute for
          the Official Journal of the European Union or for national law. Where
          this site and the Official Journal differ, the Official Journal is
          right.
        </p>
        <p>
          This handbook is written and self-funded by the operator of{" "}
          <a href="https://mandate-rail.com" rel="noopener">
            Mandate Rail
          </a>
          , a product for organisational mandates. No advertisers, no sponsors.
          See <Link href="/about">About</Link> for the full disclosure.
        </p>
        <nav className="flex flex-wrap gap-4 pt-2">
          <Link href="/about">About</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/sources">Sources</Link>
          <Link href="/privacy">Privacy</Link>
          <a href="mailto:hello@eudipoa.com">hello@eudipoa.com</a>
        </nav>
      </div>
    </footer>
  );
}
