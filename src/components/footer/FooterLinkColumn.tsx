import React from 'react';

interface Link {
  href: string;
  text: string;
}

interface ColumnProps {
  title: string;
  links?: Link[];
  content?: React.ReactNode;
}

const FooterLinkColumn: React.FC<ColumnProps> = ({ title, links, content }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-light mb-6 font-playfair">
        {title}
      </h3>
      {links && (
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-heritage-bg-secondary hover:text-button-accent-bg transition-colors duration-300 text-sm"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
      {content && <div className="space-y-4">{content}</div>}
    </div>
  );
};

export default FooterLinkColumn;
