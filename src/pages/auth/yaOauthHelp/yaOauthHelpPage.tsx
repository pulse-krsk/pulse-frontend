import { useYaOauthHelpCode, useOauthLogin } from '@/entities/auth/hooks';

export const YaOauthHelpPage = () => {
  const token = useYaOauthHelpCode();

  useOauthLogin(token);

  return null;
};
