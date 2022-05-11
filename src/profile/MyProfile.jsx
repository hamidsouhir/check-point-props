import React from 'react'
import { PropTypes } from 'prop-types'
function MyProfile({x , y , w,children,aln}) {
    console.log(x)
    console.log(y)

  return (
    <div style={{backgroundImage : 'url("https://fr.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_forspoken_02_2560x1440.jpg&height=450&width=800&fill-to-fit&sharpen")',
    height: "700px",backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
      <div style={{color:"white",marginRight:"800px",paddingTop:"100px"}}>
      <h1>{x}</h1>
      <h2>{y}</h2>
      <h3>{w}</h3>
      {children}
      
      <button onClick = {()=>aln(x)}>show name</button>
      </div>
      </div>
  )
};
MyProfile.defaultProps = { x : 'souhir'} ;


MyProfile.propTypes={
  x: PropTypes.string};



export default MyProfile