import { Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      height="335px"
      align="center"
      justify="center"
      backgroundImage="url('/images/home_banner.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex w="100%" maxWidth="1160" align="center">
        <Flex flex={1} flexDirection="column">
          <Text color="white" fontSize="2xl" fontWeight="bold" mb="4">
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text color="white">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Flex flex={1}>
          <Image src="/images/airplane.svg" />
        </Flex>
      </Flex>
    </Flex>
  );
}
