import { Flex } from "@chakra-ui/react";
import { Tip } from "./Tip";

export function TravelTips() {
  return (
    <Flex w="100%" align="center" justify="center" paddingY="16">
      <Flex
        w="100%"
        maxWidth="1160"
        align="center"
        justify="space-between"
        flexDirection="row"
      >
        <Tip text="vida noturna" url="/images/cocktail.svg" />
        <Tip text="praia" url="/images/surf.svg" />
        <Tip text="moderno" url="/images/building.svg" />
        <Tip text="clássico" url="/images/museum.svg" />
        <Tip text="e mais.." url="/images/earth.svg" />
      </Flex>
    </Flex>
  );
}
