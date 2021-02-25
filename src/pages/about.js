import React from 'react'
import { GitHub, Twitter, Linkedin } from 'react-feather'

import Layout from '../components/layout'
import SocialLink from '../components/social-link'
import SEO from './seo'

const About = () => {
  const githubLink = 'https://github.com/DeveshMhatre'
  const twitterLink = 'https://twitter.com/i_am_devesh'
  const linkedinLink = 'https://linkedin.com/in/devesh-mhatre-a74192135'

  return (
    <Layout>
      <SEO title="About" />
      <article className="main about">
        <h3 className="about__greeting">Hey</h3>

        <section className="about__details">
          <div className="about__details--info">
            <p>
              My name is Devesh, and I am a digital marketer during the weekdays
              and a front-end developer during the weekends (don&apos;t ask)! As
              such, writing, designing, and coding dominate most of my days.
            </p>
            <p>
              But when I&apos;m not working, I&apos;m usually lost in either a
              book, movie, game, or album (or playlist). Naturally, everything
              you will find here will center around books, movies, games, music,
              or technology.
            </p>
            <p>
              If you like what you read or would like to chat with me over any
              of the topics I write about, feel free to connect with me on the
              following platforms!
            </p>
          </div>

          <section className="about__details--socials">
            <SocialLink link={githubLink}>
              <GitHub />
            </SocialLink>
            <SocialLink link={linkedinLink}>
              <Linkedin />
            </SocialLink>
            <SocialLink link={twitterLink}>
              <Twitter />
            </SocialLink>
          </section>
        </section>
      </article>
    </Layout>
  )
}

export default About
