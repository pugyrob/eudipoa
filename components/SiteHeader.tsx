import Link from "next/link";

const NAV = [
  { href: "/poa", label: "Power of attorney" },
  { href: "/certificate", label: "Certificate" },
  { href: "/mandates", label: "Mandates" },
  { href: "/eidas/attestation-of-attributes", label: "eIDAS" },
  { href: "/questions", label: "Plain answers" },
  { href: "/updates", label: "Updates" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="masthead-rule" />
      <div className="mx-auto max-w-3xl px-5 pt-5 pb-4">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <Link href="/" className="brand">
            EUDIPOA
            <span className="brand-sub block">
              The digital EU power of attorney, on the record
            </span>
          </Link>
        </div>
        <nav className="flex gap-x-5 gap-y-1 flex-wrap pt-4">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
