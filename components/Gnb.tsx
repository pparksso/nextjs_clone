import { useAuth } from '@/contexts/auth_user.context';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';

const Gnb = () => {
  const { loading, signOut, authUser, signInWithGoogle } = useAuth();
  const authInitialized = loading || authUser === null;
  const logoutBtn = (
    <Button onClick={signOut} as="a" fontWeight={400} variant="link">
      LOGOUT
    </Button>
  );
  const loginBtn = (
    <Button
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg="pink.400"
      _hover={{ bg: 'pink.300' }}
      onClick={signInWithGoogle}
    >
      LOGIN
    </Button>
  );
  return (
    <Box borderBottom={1} borderStyle="solid" borderColor="gray.200" bg="white">
      <Flex minH="60px" py={{ base: 2 }} px={{ base: 4 }} align="center" maxW="md" mx="auto">
        <Spacer />
        <Box flex="1">
          <img src="/logo.svg" alt="logo" style={{ height: '40px' }} />
        </Box>
        <Box justifyContent="flex-end">{authInitialized ? loginBtn : logoutBtn}</Box>
      </Flex>
    </Box>
  );
};

export default Gnb;
