import { Star } from './Icons';

export default function Brand({ projectName }) {
  return (
    <div className="brand" aria-label={projectName}>
      <div className="brand__mark" aria-hidden="true">
        <span className="brand__c">C</span>
        <Star className="brand__star" size={15} strokeWidth={2.4} />
      </div>
      <span className="brand__name">{projectName}</span>
    </div>
  );
}
