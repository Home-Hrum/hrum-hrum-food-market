import React from 'react';
import {
    Row,
    Col,
    Container
} from 'react-bootstrap'


const GridSystem = ({ colCount, children, md }) => {
    let rowCount = Math.floor(children.length / colCount) + 1
    let index = 0

    console.log(children)

    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    const renderRows = () => {
        let rows = []

        for(let row = 0; row < rowCount; row++) {
            rows.push(
                <Row className='Row'>
                    {
                        renderCols()
                    }
                </Row>
            )
        }

        return rows
    }

    const renderCols = () => {
        let cols = []

        for (let col = 0; col < colCount; ++col) {
            if(index < children.length) {
                cols.push(
                    <Col className='Col' md={md}>
                        {children[index]}
                    </Col>
                )
                index++
            }
        }

        return cols
    }

    return (
        <Container fluid="md">
            {
                buildGrid()
            }
        </Container>
    );
};

export default GridSystem;