import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Seo({ 
  title = 'SM Traffic Qatar', 
  description = 'Professional traffic management solutions',
  path = '',
  image = '/assets/logo.png'
}) {
  useEffect(() => {
    document.title = title;
    
    // Helper to update/create meta tags
    const updateTag = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // Standard meta tags
    updateTag('description', description);
    
    // OpenGraph
    updateTag('og:title', title, true);
    updateTag('og:description', description, true);
    updateTag('og:image', image, true);
    updateTag('og:url', `https://www.smtrafficqatar.com${path}`, true);
    updateTag('og:type', 'website', true);
    
    // Twitter
    updateTag('twitter:card', 'summary_large_image');
    updateTag('twitter:title', title);
    updateTag('twitter:description', description);
    updateTag('twitter:image', image);
  }, [title, description, path, image]);

  return null; // No DOM output needed
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string
};