"use client";

import { useState } from "react";
import Link from "next/link";

const roles = ["All", "Companies", "Member States", "Relying parties", "Commission"];

const dates = [
  { date: "31 July 2026", role: "Commission", status: "Overdue", title: "Template implementing acts", detail: "The Commission deadline for implementing acts covering the certificate and power-of-attorney templates, taxonomies and wallet compatibility. No act was located in the Official Journal at the 4 September 2026 check.", source: "/poa/directive-2025-25" },
  { date: "24 December 2026", role: "Member States", status: "Upcoming", title: "EUDI Wallet availability", detail: "Each Member State must provide at least one European Digital Identity Wallet under the eIDAS 2 timetable.", source: "/poa/wallet" },
  { date: "24 December 2026", role: "Relying parties", status: "Upcoming", title: "Relying-party registration rules apply", detail: "Commission Implementing Regulation (EU) 2025/848 applies.", source: "/eidas/relying-party-registration" },
  { date: "31 July 2027", role: "Member States", status: "Upcoming", title: "Main transposition deadline", detail: "Member States must adopt and publish the main laws, regulations and administrative provisions needed to comply with Directive (EU) 2025/25.", source: "/comply" },
  { date: "24 December 2027", role: "Relying parties", status: "Upcoming", title: "Wallet acceptance for specified private relying parties", detail: "The Article 5f(2) acceptance rule reaches its 36-month deadline. Scope and exceptions must be checked against the Regulation.", source: "/eidas/relying-party-registration" },
  { date: "31 July 2028", role: "Companies", status: "Future", title: "Main company-law measures apply", detail: "National measures implementing the main Directive provisions apply. The digital EU power of attorney and EU Company Certificate become operational through national systems.", source: "/comply" },
  { date: "1 August 2028", role: "Member States", status: "Future", title: "Group-data provisions transposed", detail: "The later timetable applies to Article 19(2)(i) and Article 19b of Directive (EU) 2017/1132.", source: "/poa/directive-2025-25" },
  { date: "1 August 2029", role: "Companies", status: "Future", title: "Group-data provisions apply", detail: "The later Article 19b measures begin to apply.", source: "/poa/directive-2025-25" },
];

export default function DeadlineExplorer() {
  const [role, setRole] = useState("All");
  const visible = role === "All" ? dates : dates.filter((item) => item.role === role);

  return (
    <>
      <div className="deadline-filters" aria-label="Filter deadlines by audience">
        {roles.map((item) => (
          <button
            key={item}
            type="button"
            className={role === item ? "deadline-filter is-active" : "deadline-filter"}
            onClick={() => setRole(item)}
            aria-pressed={role === item}
          >
            {item}
          </button>
        ))}
      </div>
      <ol className="deadline-list">
        {visible.map((item) => (
          <li key={item.date + item.title} className="deadline-item">
            <div>
              <span className={"deadline-status deadline-status--" + item.status.toLowerCase()}>{item.status}</span>
              <p className="deadline-date">{item.date}</p>
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <Link href={item.source}>Read the cited source chain</Link>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
