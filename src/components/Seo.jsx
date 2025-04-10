import { Helmet } from 'react-helmet-async'
import PropTypes from 'prop-types'

export default function Seo({ 
  title, 
  description, 
  path, 
  image = '/assets/logo.png',
  type = 'website' 
}) {
  const fullUrl = `https://www.smtrafficqatar.com${path || ''}`
  const fullImageUrl = `https://www.smtrafficqatar.com${image}`
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | SM Traffic Qatar</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
}