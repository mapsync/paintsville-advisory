import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as Icon from 'react-feather';

export const ContactPageTemplate = ({ name, address, mailing_address, city_state_zip, phone, after_hours_phone, fax, email, hours }) => {
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
            After Hours: <a href={"tel:1-" + after_hours_phone}>{after_hours_phone}</a><br />
            F: {fax}<br />
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
      </div>
      <div className="footer">
        <div className="d-inline-block float-right">
          <a className="btn btn-sm btn-link tooltip tooltip-left" data-tooltip="Settings" rel="noopener noreferrer" href="https://stanfordwater.geosync.cloud/admin" target="_blank">
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
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        name={frontmatter.name}
        address={frontmatter.address}
        mailing_address={frontmatter.mailing_address}
        city_state_zip={frontmatter.city_state_zip}
        phone={frontmatter.phone}
        after_hours_phone={frontmatter.after_hours_phone}
        fax={frontmatter.fax}
        email={frontmatter.email}
        hours={frontmatter.hours}
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
