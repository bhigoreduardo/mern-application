export default {
  SERVER_PUBLIC_IMAGES:
    import.meta.env.VITE_NODE_ENV === 'mock'
      ? '/mock'
      : import.meta.env.VITE_NODE_ENV === 'develop' &&
        'http://localhost:3001/api/v1/public/images/',
  SERVER_URL:
    import.meta.env.VITE_NODE_ENV === 'develop' && 'http://localhost:3001',
}
