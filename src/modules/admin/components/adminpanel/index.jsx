import React, { useState } from 'react'
import styled from 'styled-components'
import AdminNav from '../adminnav'
import BookAnalytics from '../../pages/bookanalytics'
import UserPage from '../../pages/userpage'
import BookPage from '../../pages/bookpage'
import UserAnalytics from '../../pages/useranalytics'

const AdminPanel = () => {
    const [page, setPage] = useState(1);
    const switchPageHandler = (value) => {
        setPage(value);
    }
    let returnPage = <UserPage />
    if (page === 2) {
        returnPage = <BookPage />
    }
    if (page === 3) {
        returnPage = <BookAnalytics />
    }
    if (page === 4) {
        returnPage = <UserAnalytics />
    }

    return (
        <Container>
            <AdminNav onSwitchPage={switchPageHandler} selected={page} />
            {returnPage}
        </Container>
    )
}

export default AdminPanel

const Container = styled.div`
    display: flex;
`