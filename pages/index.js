import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>{locale}</title>
      </Head>
      <main>Locale is {locale}</main>
    </>
  );
}
