import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  credentialId?: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-cream-100 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <Award className="h-6 w-6 text-cream-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-1">{cert.date}</p>
                {cert.link && cert.credentialId && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-warm-600 hover:text-warm-800 flex items-center gap-1"
                  >
                    <span>Credential ID: {cert.credentialId}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
