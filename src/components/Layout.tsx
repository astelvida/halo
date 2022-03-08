import * as React from "react";
import { Box, Container, Heading, VStack } from "@chakra-ui/react"
import { ReactProps } from "../lib/types";
import  Head  from "next/head";
import Link from "next/link";

interface LayoutProps extends ReactProps {
  home?: Boolean,
  size?: string
  siteTitle?: string
}

const name = 'Sevda Anefi'
export const SITE_TITLE = 'Shapez Mania'

// type Size = "sm" | "md" | ''

const Layout = ({ children, home, size="xl", siteTitle = SITE_TITLE }: LayoutProps) => {


  
  return (
    <Container maxW={`container.${size}`} py={0} px={4} mt={12} mb={24} mx="auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>{" "}
      {!home && (
        <Box my={12} mx={0}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </Box>
      )}
    </Container>
  );
}


export default Layout