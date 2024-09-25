import React from 'react'
import CarouselBanner from './inc/CarouselBanner'
import MoreMember from './inc/MoreMember'
import HomeService from './inc/HomeService'
import HomeMarkq from './inc/HomeMarkq'
import HomeClassWork from './inc/HomeClassWork'
import HomeTween from './inc/HomeTween'
import HomeTranies from './inc/HomeTranies'
import HomeSignup from './inc/HomeSignup'
import HomeReview from './inc/HomeReview'
import HomeGallery from './inc/HomeGallery'
import HomeAbout from './inc/HomeAbout'

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <MoreMember />
      <HomeAbout />
      <HomeService />
      <HomeMarkq />
      <HomeClassWork />
      <HomeTween />
      <HomeTranies />
   
      <HomeGallery />
      <HomeSignup />
      <HomeReview />
    </>
  )
}
