import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "500": "#999999",
      "50": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.600",
      },
    },
  },
});
