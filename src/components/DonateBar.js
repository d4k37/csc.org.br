import React from "react"
// import PropTypes from "prop-types"
import tailwindCommon from "~utils/tailwindCommon"
import Donate from "~components/Donate"

const DonateBar = () => (
  <>
    <section className="border-t border-gray-400 py-16">
      <div className="container-sm text-center">
        <h2 className={`mb-6 ${tailwindCommon.subheading}`} data-aos="fade-in">
          Donate today
        </h2>
        <Donate />
      </div>
    </section>
  </>
)

DonateBar.defaultProps = {}

DonateBar.propTypes = {}

export default DonateBar
