import React from 'react'

import Layout from '../components/layout'

const About = () => {
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
            <a
              href="https://github.com/DeveshMhatre/"
              className="about__socials--github"
            >
              <i className="gg-twitter"></i>
            </a>
          </section>
        </section>
      </article>
    </Layout>
  )
}

export default About
