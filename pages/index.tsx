import { ServiceLayout } from '@/components/Service_layout';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { GoogleLoginButton } from '@/components/google_login_btn';
import { useAuth } from '@/contexts/auth_user.context';

const IndexPage: NextPage = function () {
  const { signInWithGoogle, authUser } = useAuth();
  return (
    <ServiceLayout title="test" minH="100vh" backgroundColor="gray.50">
      <Box maxW="md" mx="auto" pt="10">
        <img src="/main_logo.svg" alt="메인 로고" />
        <Flex justify="center">
          <Heading>#BlahBlah</Heading>
        </Flex>
      </Box>
      <Center mt="20">
        <GoogleLoginButton onClick={signInWithGoogle} />
      </Center>
    </ServiceLayout>
  );
};

export default IndexPage;
