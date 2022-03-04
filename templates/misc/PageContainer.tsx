import Head from 'next/head'
import { Footer, NavigationBar } from '../bars'

export interface HeaderValues {
    title: string
    description: string
    children?: React.ReactNode;
}

export const PageContainer = (props: HeaderValues): React.ReactElement => {
    return (
        <div className='container'>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar />
            <main className='main'>
                {props.children}
            </main>
            <Footer />
        </div>
    )

}