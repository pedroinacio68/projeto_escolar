'use client';

import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AuthVideoShortcut() {
  const pathname = usePathname();
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(null);
    if (pathname !== '/') return;

    const findActions = () => document.querySelector<HTMLElement>('.auth-actions');
    const updateContainer = () => {
      const target = findActions();
      setContainer((current) => current === target ? current : target);
    };
    updateContainer();

    const observer = new MutationObserver(updateContainer);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  if (!container) return null;

  return createPortal(
    <Link className="team-link" href="/video">
      Ver vídeo
    </Link>,
    container,
  );
}
