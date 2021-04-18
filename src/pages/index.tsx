import { Box, Divider, Center, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTips } from "../components/TravelTips";

export default function Home() {
  return (
    <Box>
      <Header />

      <Banner />

      <TravelTips />

      <Center flexDirection="column">
        <Box width="100px" mb="16">
          <Divider borderColor="gray.600" borderWidth="1px" />
        </Box>

        <Text textAlign="center" fontSize="2xl" fontWeight="bold">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Center>

      {/* Slidder */}
    </Box>
  );
}
