import Image from "next/image";

const links = [
  { label: "特定商取引法に基づく表記", href: "/legal" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-darker">
      <div className="mx-auto max-w-[1080px] px-5 pb-8 pt-12 lg:px-0">
        <div className="lg:flex lg:items-start lg:justify-between">
          {/* Left: Logo + Company info */}
          <div>
            <Image
              src="/quickry_logo_white.webp"
              alt="Quickry"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
            <div className="mt-4 space-y-1 text-xs leading-relaxed text-white/40">
              <p>Quickry株式会社</p>
              <p>contact@quickry.jp</p>
            </div>
          </div>

          {/* Right: Links */}
          <div className="mt-6 flex flex-row gap-6 lg:mt-0 lg:flex-col lg:items-end lg:gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/50 transition-colors duration-200 hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/8 pt-6 text-center">
          <p className="text-[11px] text-white/25">
            &copy; 2026 Quickry Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
