import { useEffect, useState } from "react";

export type DrawerLink = {
  label: string;
  href: string;
  icon: string;
  className?: string;
};

export default function MobileDrawer({
  links,
  brand,
}: {
  links: DrawerLink[];
  brand: { icon: string; name: string };
}) {
  const [open, setOpen] = useState(false);

  // Close on Escape for accessibility
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Lock page scroll while the drawer is open
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Drawer panel */}
      <nav
        className={`mobile-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="drawer-header">
          <a href="/" className="drawer-brand" onClick={close}>
            <i className={brand.icon} />
            <span className="brand-n">{brand.name.charAt(0)}</span>
            {brand.name.slice(1)}
          </a>
          <button
            type="button"
            className="drawer-close"
            aria-label="Close menu"
            onClick={close}
          >
            ×
          </button>
        </div>

        <ul className="drawer-nav">
          {links.map((link) => (
            <li key={link.href} className={link.className}>
              <a href={link.href} onClick={close}>
                <i className={link.icon} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <p>
            Mon–Fri 6:00 AM – 10:00 PM
            <br />
            <a href="tel:+233554062965">(+233) 55-406-2965</a>
          </p>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`drawer-overlay${open ? " is-visible" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
    </>
  );
}
