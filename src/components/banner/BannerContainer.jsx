import React from 'react'
import { useState } from 'react'
import { Container, Box } from '@mui/material'
import Banner from './Banner'

const BannerContainer = ({sourceImg, heighBanner, title, subtitle}) => {

  return (
    <>
        <Container 
          maxWidth={false}
          sx={{
              justifyContent:'center', alignContent:'center', 
              width:'100vw', height:`${heighBanner}`, overflow:'hidden',
              background: `linear-gradient(rgba(189, 189, 189, 0.55), rgba(187, 187, 187, 0.55)), url(${sourceImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment:'fixed',
              padding: '0px !important',
              margin: '0px !important'
          }}
        >
          <Banner title={title} subtitle={subtitle}/>
        </Container>
    </>
  )
}

export default BannerContainer