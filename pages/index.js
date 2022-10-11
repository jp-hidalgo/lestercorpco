import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>lestercorp es aquí!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Lestercorp está aquí para ayudarle con sus necesidades. Estaremos pronto con ustedes dando mayor información en esta página" />
        <p className="description">
          </p>
      </main>

      <Footer />
    </div>
  )
}
