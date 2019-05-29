import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather';
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ content, contentComponent, name, address, mailing_address, city_state_zip, phone, after_hours_phone, fax, email, hours }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <div className="container container-main grid-md">
        <div className="card">
          <div className="card-header">
            Address
          </div>
          <div className="card-body">
            {name}<br />
            {address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Mailing Address
          </div>
          <div className="card-body">
            {name}<br />
            {mailing_address}<br />
            {city_state_zip}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Phone
          </div>
          <div className="card-body">
            T: <a href={"tel:1-" + phone}>{phone}</a><br />
            F: {fax}<br />
            After Hours Gas, Water, or Sewer Emergency: <a href={"tel:1-" + after_hours_phone}>{after_hours_phone}</a><br />
            E: <a href={"mailto:" + email}>{email}</a>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Hours
          </div>
          <div className="card-body">
            {hours}
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            Information
          </div>
          <div className="card-body">
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="d-inline-block float-right">
          <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://paintsvilleutilities.geosync.cloud/admin" target="_blank">
            <Icon.Settings size={16}/>
          </a>
        </div>
      </div>
    </div>
  )
}

ContactPageTemplate.propTypes = {
  address: PropTypes.string,
  phone: PropTypes.string,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        name={post.frontmatter.name}
        address={post.frontmatter.address}
        mailing_address={post.frontmatter.mailing_address}
        city_state_zip={post.frontmatter.city_state_zip}
        phone={post.frontmatter.phone}
        after_hours_phone={post.frontmatter.after_hours_phone}
        fax={post.frontmatter.fax}
        email={post.frontmatter.email}
        hours={post.frontmatter.hours}
        websites={post.frontmatter.websites}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name,
        address,
        mailing_address,
        city_state_zip,
        phone,
        after_hours_phone,
        fax,
        email,
        hours
      }
    }
  }
`
