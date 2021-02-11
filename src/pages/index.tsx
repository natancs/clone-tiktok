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
        <Suggestions />
      </Layout>

    </div>
  )
}

export async function getServerSideProps(context) {
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar: 'https://avatars.githubusercontent.com/u/59514027?s=400&u=e6657d3cea381b4eb9e89ab9075d1042a724dcdc&v=4',
        name: 'Natanael',
        username: 'Natanael'
      },
      description: 'na vida você é quem?!',
      tags: [
        { title: '#youtube' },
        { title: '#clone' },
      ],
      songName: 'original sound - Nadine A.A',
      videoUrl: 'https://v16m.tiktokcdn.com/bb2cd8c4553928c17c3b551dd3182845/60259ad9/video/tos/useast2a/tos-useast2a-ve-0068c003/61480b907a844e71b40e4f7f1cffba04/?a=1233&br=1728&bt=864&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102111459520101901871630E46137E&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=ajs6eTZsdzg3MzMzNTczM0ApNTZoaTY7NTxlNzczM2ZmOGdwYXMyL29jaWJgLS1hMTZzczBjNjYxMjYxLTRfLjNiYjA6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replices: 50
    },
    {
      id: 2,
      author: {
        id: 2,
        avatar: 'https://avatars.githubusercontent.com/u/59514027?s=400&u=e6657d3cea381b4eb9e89ab9075d1042a724dcdc&v=4',
        name: 'Natanael',
        username: 'Natanael'
      },
      description: "Какая девушка симпатичней 1 или 2?😍 Who's cuter?",
      tags: [
        { title: '#youtube' },
        { title: '#clone' },
      ],
      songName: "It's Tricky - RUN DMC",
      videoUrl: 'https://v58.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037c001/feadd6d41b6a4ae9bcdfd7ace5683cee/?VExpiration=1613077217&VSignature=9hfHDEltzV1Xhuh6B_EUNA&a=1233&br=2266&bt=1133&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202102111459490101890731370045B6B9&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M2xqcmg3Zm5yMzMzMzczM0ApMzg1NDQ4aTs2NzloNWk5ZWdgZ2AvNC5gMzNgLS1fMTRzczQvNjY0X2IuLzE1MC00NGE6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replices: 50
    }
  ]

  return {
    props: {
      posts: data
    }
  }
}
