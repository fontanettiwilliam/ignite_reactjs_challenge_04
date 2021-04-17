import { Flex, Image, Icon, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";

interface HeaderProps {
  allowGoBack?: boolean;
}

export function Header({ allowGoBack = false }: HeaderProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Flex
      w="100vw"
      height="100px"
      p="6"
      align="center"
      justify="center"
      bg="red"
    >
      {allowGoBack && (
        <IconButton
          position="absolute"
          left="8"
          aria-label="Open navigation"
          icon={<Icon as={FaChevronLeft} />}
          fontSize="16"
          variant="unstyled"
          onClick={handleGoBack}
          mr="2"
        />
      )}
      <Image src="/images/logo.svg" alt="Logo" height="100%" />
    </Flex>
  );
}
