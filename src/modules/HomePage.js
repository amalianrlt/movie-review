import React from 'react'
import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import HomeTab from '../components/HomeTab'
import PaginationPage from '../components/Pagination'

export default function HomePage() {
    return (
        <div>
            <HeaderPage/>
            <HomeTab/>
            <PaginationPage/>
            <FooterPage/>
        </div>
    )
}
