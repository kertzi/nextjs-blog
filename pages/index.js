import Head from 'next/head'
import Link from 'next/Link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
//import useSWR from 'swr' // Use for client side fetch

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// export async function getServerSideProps(context) {
//   // Server side fetches
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }


export default function Home({ allPostsData }) {
  // For client side fetch
  //const { data, erro } = useSWR('/api/user', fetch)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Heiii this is test website</p>
        <p>
          Sample site
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
