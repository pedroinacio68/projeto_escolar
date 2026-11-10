'use client';

import {useEffect, useState} from 'react';

const KEY = 'escola-theme';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY) === 'dark';
    setDark(saved);
    document.documentElement.dataset.theme = saved ? 'dark' : 'light';
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem(KEY, next ? 'dark' : 'light');
  }

  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={dark ? 'Mudar para fundo branco' : 'Mudar para fundo preto'} title={dark ? 'Mudar para fundo branco' : 'Mudar para fundo preto'}>{dark ? '☀️' : '🌙'} <span>{dark ? 'Modo claro' : 'Modo escuro'}</span></button>;
}
