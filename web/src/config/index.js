export default {
  SERVER_PUBLIC_IMAGES:
    import.meta.env.VITE_NODE_ENV === 'develop'
      ? '/images/mock'
      : import.meta.env.VITE_NODE_ENV === 'homolog' &&
        'http://localhost:3001/api/v1/public/images/',
  SERVER_URL:
    import.meta.env.VITE_NODE_ENV === 'homolog' && 'http://localhost:3001',
}
