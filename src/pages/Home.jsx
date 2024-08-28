import React from 'react'
import CarouselBanner from './inc/CarouselBanner'
import MoreMember from './inc/MoreMember'
import HomeService from './inc/HomeService'
import HomeMarkq from './inc/HomeMarkq'
import HomeOutstanding from './inc/HomeOutstanding'
import HomeClassWork from './inc/HomeClassWork'
import HomeTween from './inc/HomeTween'
import HomeTranies from './inc/HomeTranies'
import HomeSignup from './inc/HomeSignup'
import HomeTestimonial from './inc/HomeTestimonial'
import HomeReview from './inc/HomeReview'

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <MoreMember />
      <HomeService />
      <HomeMarkq />
      <HomeClassWork />
      <HomeTween />
      <HomeTranies />
      <HomeSignup />
      <HomeReview />
    </>
  )
}
