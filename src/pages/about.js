import React from 'react'

import { GitHub, Twitter, Linkedin } from 'react-feather'

import Layout from '../components/layout'
import SocialLink from '../components/social-link'

const About = () => {
  const githubLink = 'https://github.com/DeveshMhatre'
  const twitterLink = 'https://twitter.com/i_am_devesh'
  const linkedinLink = 'https://linkedin.com/in/devesh-mhatre-a74192135'

  return (
    <Layout>
      <article className="main about">
        <h3 className="about__greeting">Hey</h3>

        <section className="about__details">
          <p className="about__details--info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            aliquet neque posuere justo rutrum, et commodo mauris feugiat.
            Curabitur non porta tortor. Nullam eu lacus enim. Fusce eget posuere
            felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi aliquet neque posuere justo rutrum, et commodo mauris feugiat.
            Curabitur non porta tortor. Nullam eu lacus enim. Fusce eget posuere
            felis.
          </p>

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
