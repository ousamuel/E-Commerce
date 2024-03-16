import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";

export function Footer() {
//   const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Link >Reset your password</Link>
    </Flex>
  );
}
