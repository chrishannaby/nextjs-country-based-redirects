import Head from "next/head";
import { Router, useRouter } from "next/router";
import Cookies from "universal-cookie";

const localeMap = {
  "fr-fr": {
    language: "fr",
    country: "FR",
  },
  "en-us": {
    language: "en",
    country: "US",
  },
  "en-at": {
    language: "en",
    country: "AT",
  },
  "en-uk": {
    language: "en",
    country: "UK",
  },
};

function setLocaleCookies(locale) {
  const cookies = new Cookies();
  const values = localeMap[locale];
  cookies.set("nf_country", values.country, { path: "/" });
  cookies.set("nf_lang", values.language, { path: "/" });
}

function clearLocaleCookies() {
  const cookies = new Cookies();
  cookies.remove("nf_country");
  cookies.remove("nf_lang");
}

export default function Home() {
  const { locale, reload } = useRouter();
  return (
    <>
      <Head>
        <title>{locale}</title>
      </Head>
      <main>
        <h1>Locale is {locale}</h1>
        <ul>
          {Object.keys(localeMap).map((locale) => {
            return (
              <li>
                <button
                  key={locale}
                  onClick={() => {
                    setLocaleCookies(locale);
                    reload("/");
                  }}
                >
                  Set locale to {locale}
                </button>
              </li>
            );
          })}

          <li>
            <button
              onClick={() => {
                clearLocaleCookies();
                reload("/");
              }}
            >
              Clear locale cookies
            </button>
          </li>
        </ul>
      </main>
    </>
  );
}
