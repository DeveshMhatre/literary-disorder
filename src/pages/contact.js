import React, { useReducer } from 'react'

import Layout from '../components/layout'

import contactReducer from '../utils/contactReducer'

const initialValue = { name: '', email: '', message: '' }

const About = () => {
  const [state, dispatch] = useReducer(contactReducer, initialValue)

  return (
    <Layout>
      <article className="main contact">
        <h1 className="contact__heading">Contact Me</h1>

        <form className="contact__form">
          <div className="contact__form--row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="text-input"
              id="name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: 'NAME', payload: e.target.value })
              }
            />
          </div>

          <div className="contact__form--row">
            <label htmlFor="email">Email</label>
            <input
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
