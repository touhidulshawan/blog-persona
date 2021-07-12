import Head from "next/head";
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>{/* navbar  */}</header>
      <main>{children}</main>
    </>
  );
};
export default Layout;
