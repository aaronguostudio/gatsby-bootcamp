import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {

  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title, description, author
        }
      }
    }
  `)

  console.log('siteMetadata', siteMetadata)
  const { title, author, description } = siteMetadata

  return (
    <header>
      <div>
        <p>{title} - {author}</p>
        <p>{description}</p>
      </div>
      <nav>
        <li><Link className={headerStyles.link} to="/">Home</Link></li>
        <li><Link to="/blog">Markdown Blog</Link></li>
        <li><Link to="/contentful">Contentful Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
    </header>
  )
}

export default Header
