/**
 * Hook to get the oauth token from the url
 * @returns The token found in the url or null if not found
 */
export const useYaOauthHelpCode = () => {
  const hash = window.location.hash;
  if (hash) {
    const queryParams = new URLSearchParams(hash.slice(1));
    return queryParams.get('access_token');
  } else {
    return null;
  }
};
