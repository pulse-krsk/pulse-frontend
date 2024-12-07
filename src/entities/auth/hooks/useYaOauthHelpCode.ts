import { useSearchParams } from 'react-router-dom';

/**
 * Hook to get the oauth token from the url
 * @returns The token found in the url or null if not found
 */
export const useYaOauthHelpCode = () => {
  const [params] = useSearchParams();
  return params.get('access_token');
};
