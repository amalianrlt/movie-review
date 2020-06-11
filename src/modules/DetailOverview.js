import React from 'react'
import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import OverviewTab from '../components/overviewpage/OverviewTab'


export default function HomePage() {
    return (
        <div>
            <HeaderPage/>
            <OverviewTab/>
            <FooterPage/>
        </div>
    )
}
