import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import Layout from "../../components/layout"

const FirstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Postddd</title>

        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnLoad"
          onLoad={() => {
            console.log(`script loaded`)
          }}
        />
        <h1>First Pddost</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}

export default FirstPost