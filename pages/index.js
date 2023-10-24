import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-stated-nextjs.png',
    date:"21-10-2023",
    excerpt:'NextJS is a the eact amework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
  },
  {
    slug: 'getting-started-with-nextjs-1',
    title: 'Getting Started with NextJS',
    image: 'getting-stated-nextjs.png',
    date:"21-10-2023",
    excerpt:'NextJS is a the eact amework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
  },
  {
    slug: 'getting-started-with-nextjs-2',
    title: 'Getting Started with NextJS',
    image: 'getting-stated-nextjs.png',
    date:"21-10-2023",
    excerpt:'NextJS is a the eact amework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
  },
  {
    slug: 'getting-started-with-nextjs-3',
    title: 'Getting Started with NextJS',
    image: 'getting-stated-nextjs.png',
    date:"21-10-2023",
    excerpt:'NextJS is a the eact amework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR',
  },
  
];

function HomePage(props) {
  return <Fragment>
    <Hero />
    <FeaturedPosts posts={DUMMY_POSTS}/>
  </Fragment>
}

export default HomePage;
