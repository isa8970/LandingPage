import { ArrowUpRight } from './Icons';

export default function ProjectLink({ item, index }) {
  const Icon = item.icon;
  const isPlaceholder = item.url.includes('TU-');

  const handleClick = (event) => {
    if (isPlaceholder) {
      event.preventDefault();
      window.alert(
        'Este enlace todavía es un marcador. Edítalo en src/data/projectLinks.js.',
      );
    }
  };

  return (
    <a
      className={`project-link project-link--${item.variant}`}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ '--delay': `${index * 80}ms` }}
      aria-label={`${item.title}. ${item.description}`}
    >
      <span className="project-link__icon" aria-hidden="true">
        <Icon size={23} strokeWidth={2.1} />
      </span>

      <span className="project-link__content">
        <span className="project-link__title-row">
          <strong>{item.title}</strong>
          {item.badge ? <span className="project-link__badge">{item.badge}</span> : null}
        </span>
        <small>{item.description}</small>
      </span>

      <ArrowUpRight
        className="project-link__arrow"
        size={19}
        strokeWidth={2}
        aria-hidden="true"
      />
    </a>
  );
}
