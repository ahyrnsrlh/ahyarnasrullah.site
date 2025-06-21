/**
 * Get absolute API URL to avoid locale prefix issues
 */
export const getApiUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, use full URL
  if (typeof window !== 'undefined') {
    const baseUrl = window.location.origin;
    return `${baseUrl}/${cleanPath}`;
  }
  
  // In server-side, use relative path
  return `/${cleanPath}`;
};

/**
 * Fetch wrapper that ensures correct API paths
 */
export const apiFetch = async (endpoint: string, options?: RequestInit) => {
  const url = getApiUrl(endpoint);
  return fetch(url, options);
};
