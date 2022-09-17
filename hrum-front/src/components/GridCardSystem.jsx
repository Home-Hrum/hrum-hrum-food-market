import React from 'react';
import {
    Row,
    Col,
} from 'react-bootstrap'


const GridCardSystem = ({ colCount, children, xs, sm, md, lg}) => {
    let rowCount = Math.floor(children.length / colCount) + 1
    let index = 0

    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    const renderRows = () => {
        let rows = []

        for (let row = 0; row < rowCount; ++row) {
            rows.push(
                <Row>
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
                    <Col xs={xs} sm={sm} md={md} lg={lg}>
                        {children[index]}
                    </Col>
                )
                index++
            }
        }

        return cols
    }

    return (
        <div className="w-75 mx-auto grid">
            {
                buildGrid()
            }
        </div>
    );
};

export default GridCardSystem;
