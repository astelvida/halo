import {
  extendTheme,
  withDefaultColorScheme,
  theme as base,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'


// import {  } from "@chakra-ui/theme";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const focusBrandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};
const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#E8EAF6",
        100: "#8C9EFF",
        200: "#536DFE",
        300: "#798CEE",
        400: "#3D5AFE",
        500: "#5c6FEC",
        600: "#414EF9",
        700: "#304FFE",
        800: "#2F37EC",
        900: "#1F279E",
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props: any) => ({
            rounded: "none",
            ...focusBrandRing,
            backgroundColor: mode('brand.500', 'brand.200')(props),
            color: mode("white", "gray.800")(props),
            _hover: {
              backgroundColor: mode('brand.600', 'brand.300')(props),
            }
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...focusBrandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
