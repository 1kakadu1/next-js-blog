import "@/styles/bootstrap.min.css";
import "@/styles/fontawesome.css";
import 'swiper/css';
import "swiper/css/navigation";
import "@/styles/templatemo-stand-blog.css";
import "@/styles/main.scss";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
