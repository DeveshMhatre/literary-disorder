import React, { useReducer } from 'react'
import { navigate } from 'gatsby-link'

import Layout from '../components/layout'
import SEO from './seo'

import contactReducer from '../utils/contactReducer'

const initialValue = { name: '', email: '', message: '' }

// Copied from Netlify Docs
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const About = () => {
  const [state, dispatch] = useReducer(contactReducer, initialValue)

  // Copied from Netlify Docs
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <article className="main contact">
        <h1 className="contact__heading">Contact Me</h1>

        <form
          action="/thankyou"
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="contact__form--row">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="text-input"
              id="name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: 'NAME', payload: e.target.value })
              }
              required
            />
          </div>

          <div className="contact__form--row">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="text-input"
              id="email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: 'EMAIL', payload: e.target.value })
              }
            />
          </div>

          <div className="contact__form--row">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="message-input"
              value={state.message}
              onChange={(e) =>
                dispatch({ type: 'MESSAGE', payload: e.target.value })
              }
              required
            ></textarea>
          </div>

          <button className="contact__form--submit" type="submit">
            Submit
          </button>
        </form>
      </article>
    </Layout>
  )
}
export default About
