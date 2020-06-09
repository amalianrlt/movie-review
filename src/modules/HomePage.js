import React from 'react'
import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import HomeTab from '../components/HomeTab'
import PaginationPage from '../components/Pagination'
import CarouselHome from '../components/CarouselHome'

export default function HomePage() {
    return (
        <div>
            <HeaderPage/>
            <CarouselHome/>
            <HomeTab/>
            <PaginationPage/>
            <FooterPage/>
        </div>
    )
}
