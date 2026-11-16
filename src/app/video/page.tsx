import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';

export default function VideoPage() {
  return (
    <main className="team-page">
      <header className="team-header">
        <Link className="team-back" href="/">Voltar para o login</Link>
        <div className="team-actions">
          <ThemeToggle />
          <Link className="team-home-brand" href="/">eduspace</Link>
        </div>
      </header>
      <section className="team-content video-content">
        <small className="auth-kicker">INSTITUTO PRIMAVERA - 2026</small>
        <h1>Ver vídeo</h1>
        <div className="video-frame">
          <iframe
            src="https://www.youtube.com/embed/u1mOo_48acI?si=R2E8YJ_-nX9cjxzF"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
