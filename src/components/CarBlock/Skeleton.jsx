import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="53" y="307" rx="0" ry="0" width="1" height="1" /> 
    <rect x="72" y="277" rx="0" ry="0" width="0" height="1" /> 
    <rect x="34" y="165" rx="10" ry="10" width="240" height="37" /> 
    <rect x="32" y="217" rx="11" ry="11" width="242" height="88" /> 
    <rect x="121" y="316" rx="30" ry="30" width="152" height="45" /> 
    <rect x="31" y="5" rx="10" ry="10" width="240" height="146" /> 
    <rect x="35" y="317" rx="10" ry="10" width="77" height="30" />
  </ContentLoader>
)

export default Skeleton;