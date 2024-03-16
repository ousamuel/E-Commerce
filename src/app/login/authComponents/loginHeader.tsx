import { Image, useTheme } from "@aws-amplify/ui-react";

export function LoginHeader() {
  const { tokens } = useTheme();

  return (
    <Image alt="logo" src="/imgs/logo.png" padding={tokens.space.medium} />
  );
}
