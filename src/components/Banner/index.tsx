import { Flex, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex w="100%" align="center" justify="center">
      <Image
        src="/images/home_banner.png"
        alt="Home Banner"
        height="335px"
        width="100%"
        objectFit="cover"
      />
    </Flex>
  );
}
