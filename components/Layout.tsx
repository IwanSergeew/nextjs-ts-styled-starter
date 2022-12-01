import Head from "next/head";
import React, { ReactElement } from "react";
import { A } from "../styles/General";
import { Footer, Header, Nav } from "../styles/Layout";

type LayoutProps = {
  children?: any;
  title?: string;
};

export default ({
  children,
  title = "This is the default title",
}: LayoutProps): ReactElement => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header>
      <Nav>
        <A href="/">Home</A>
        <A href="/about">About</A>
      </Nav>
    </Header>
    {children}
    <Footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </>
);
