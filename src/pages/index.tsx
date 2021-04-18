import { Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTips } from "../components/TravelTips";

export default function Home() {
  return (
    <Box>
      <Header />

      <Banner />
      {/* Travel types */}
      <TravelTips />
      {/* Middle section */}
      {/* Slidder */}
    </Box>
  );
}
