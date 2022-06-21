import React from 'react'
import styled from "styled-components"
import TableLine from './components/tableline'

const TableB = (props) => {
    return (
        <TableContainer>

            <Table>
                <Thead>
                    <Tr>
                        <Th style={{ width: "10%" }}>
                            {props.header[0]}
                        </Th>
                        <Th style={{ width: "20%" }}>
                            {props.header[1]}
                        </Th>
                        <Th style={{ width: "35%" }}>
                            {props.header[2]}
                        </Th>
                        <Th style={{ width: "35%" }}>
                            {props.header[3]}
                        </Th>
                        <Th style={{ width: "10%" }}>
                            {props.header[4]}
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.data.map((item, index) => <TableLine key={item._id} data={item} index={index + 1} onEdit={props.onEdit} onDelete={props.onDelete} onAdd={props.onAdd} />)}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TableB


const TableContainer = styled.div`
    height: 80vh;
    width: 100%;
    overflow: auto;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
`

const Thead = styled.thead``
const Tbody = styled.tbody`
    overflow: scroll;
`
const Tr = styled.tr`
    background-color: #009879;
    color: #ffffff;
    text-align: left;
`
const Th = styled.th`
    padding: 12px 15px;
`