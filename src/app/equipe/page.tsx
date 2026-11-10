'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import ThemeToggle from '../ThemeToggle';

type TeamMember = {
  name: string;
  image: string;
  github?: string;
  initials: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Gisely Freitas Travesso',
    image: '/gisely-freitas-travesso.png',
    github: 'https://github.com/gisely1234',
    initials: 'GF',
  },
  {
    name: 'Pedro Marques de Matos',
    image: '/pedro-marques-de-matos.png',
    initials: 'PM',
  },
  {
    name: 'Anthony Eduardo da Silva Melo',
    image: '/anthony-eduardo-da-silva-melo.png',
    github: 'https://github.com/AnthonyEduardo123',
    initials: 'AM',
  },
  {
    name: 'Eoá Soares Barbosa',
    image: '/eoa-soares-barbosa.png',
    github: 'https://github.com/eloa66',
    initials: 'ES',
  },
  {
    name: 'Pedro Inácio Monteiro Silva',
    image: '/pedro-inacio.png',
    github: 'https://github.com/pedroinacio68',
    initials: 'PI',
  },
];

function cameFromTeamButton() {
  return new URLSearchParams(window.location.search).get('via') === 'botao' && sessionStorage.getItem('team-page-access') === '1';
}

function TeamMemberCard({member}: {member: TeamMember}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="team-member">
      <div className="team-member-photo">
        {imageFailed ? (
          <div className="team-member-image-fallback" role="img" aria-label={`Imagem indisponível para ${member.name}`}>
            <span>{member.initials}</span>
            <small>Imagem indisponível</small>
          </div>
        ) : (
          <img
            src={member.image}
            alt={`Foto de ${member.name}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className="team-member-info">
        <h3>{member.name}</h3>
        <p>Curso de Desenvolvimento de Sistemas</p>
        {member.github ? (
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            Ver perfil no GitHub
          </a>
        ) : (
          <span className="team-member-no-github">Perfil do GitHub não informado</span>
        )}
      </div>
    </article>
  );
}

export default function TeamPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (!cameFromTeamButton()) {
      router.replace('/');
      return;
    }

    setAllowed(true);

    function guardHistory() {
      if (window.location.pathname === '/equipe' && !cameFromTeamButton()) {
        setAllowed(false);
        router.replace('/');
      }
    }

    window.addEventListener('popstate', guardHistory);
    return () => window.removeEventListener('popstate', guardHistory);
  }, [router]);

  if (!allowed) return null;

  return (
    <main className="team-page">
      <header className="team-header">
        <Link className="team-back" href="/">Voltar para o login</Link>
        <div className="team-actions"><ThemeToggle/><Link className="team-home-brand" href="/">eduspace</Link></div>
      </header>
      <section className="team-content">
        <small className="auth-kicker">INSTITUTO PRIMAVERA - 2026</small>
        <h1>Oi!</h1>
        <h2>Nossa equipe</h2>
        <p>{'Conhe\u00E7a quem faz parte da equipe da EduSpace.'}</p>
        <div className="team-members">
          {teamMembers.map((member) => <TeamMemberCard key={member.name} member={member}/>)}
        </div>
      </section>
    </main>
  );
}
