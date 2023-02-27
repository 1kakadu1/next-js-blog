import { Footer } from "@/components/footer/footer.component"
import { Header } from "@/components/header/header.component"
import Head from "next/head"

export const LayoutPage = ({ children, meta }: { children: JSX.Element[] | JSX.Element, meta: { title: string, description: string } }) => {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.title} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}