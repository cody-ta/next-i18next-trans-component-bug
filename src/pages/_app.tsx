import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import { appWithTranslation } from 'next-i18next'


const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp)

