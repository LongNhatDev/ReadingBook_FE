import React from 'react'
import styled from 'styled-components'
import AnalyticsChart from './AnalyticsChart'
import Content from '../content'

const AnalyticsPage = (props) => {
    return (
        <Content>
            <CardContainer>
                <Card>
                    <span>Total:</span>
                    <TotalUser>50</TotalUser>
                </Card>
                <Card>
                    <span>New: </span>
                    <NewUser>50</NewUser>
                </Card>
                <Card>
                    <span>Delete:</span>
                    <DeleteUser>50</DeleteUser>
                </Card>
            </CardContainer>
            <SelectChart>
                <option>
                    Jan
                </option>
                <option>
                    Feb
                </option>
                <option>
                    Mar
                </option>
                <option>
                    Apr
                </option>
                <option>
                    May
                </option>
                <option>
                    Jun
                </option>
                <option>
                    Jul
                </option>
                <option>
                    Aug
                </option>
                <option>
                    Sep
                </option>
                <option>
                    Oct
                </option>
                <option>
                    Nov
                </option>
                <option>
                    Dec
                </option>
            </SelectChart>
            <AnalyticsChart />
        </Content>
    )
}

export default AnalyticsPage

const TotalUser = styled.span`
    font-size: 3rem;
`

const NewUser = styled.span`
    font-size: 3rem;
    color: #22d312;
`
const DeleteUser = styled.span`
    font-size: 3rem;
    color: #f70808;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
`
const Card = styled.div`
    padding: 1rem 0;
    width: 13rem;
    height: 6rem;
    border: 2px solid white;
    box-shadow: 0 0 0 2px #DFE0EB;
    border-radius: 2rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const SelectChart = styled.select`
    display: inline-block;
    width: 5rem;
    border-radius: 8px;
    position: absolute;
    top:9rem;
    right: 2rem;
`