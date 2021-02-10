/* eslint-disable no-use-before-define */
import Head from 'next/head'
import Layout from '../components/Layout'

import Feed from '../components/Feed'
import Suggestions from '../components/Suggestions'

export default function Index({ posts = [] }) {
  return (
    <div>
      <Head>
        <title>TikTok</title>
      </Head>

      <Layout>
        <Feed posts={posts} />
        <Suggestions>

        </Suggestions>
      </Layout>

    </div>
  )
}
