import Link from "next/link";

const NAV = [
  { href: "/poa", label: "Power of attorney" },
  { href: "/certificate", label: "Certificate" },
  { href: "/mandates", label: "Mandates" },
  { href: "/eidas/attestation-of-attributes", label: "eIDAS" },
  { href: "/glossary", label: "Glossary" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto max-w-3xl px-5 py-4 flex flex-wrap items-baseline justify-between gap-3">
        <Link href="/" className="brand">
          EUDIPOA
        </Link>
        <nav className="flex gap-4 flex-wrap">
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
