import React from 'react'
import PropTypes from 'prop-types'
import SketchParam from '../../containers/SketchParam'
import Shot from '../../containers/Shot'
import Row from '../Row'
import Button from '../Button'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: auto;
`

const Params = styled.div`
  display: flex;
  flex-direction: column;
`

const Bottom = styled.div`
  margin-top: auto;
  padding-top: 3rem;
  text-align: right;
`

const Sketch = ({ title, params, shots, onDeleteClick, sketchId }) => (
  <Wrapper>
    <h2>{title}</h2>

    {params.length > 0 &&
      <div>
        <h3>Params</h3>
        <Params>
          {params.map((id) => (
            <SketchParam nodeId={id} key={id} />
          ))}
        </Params>
      </div>
    }

    {shots.length > 0 &&
      <div>
        <h3>Shots</h3>
        <Row>
          {shots.map((id) => (
            <Shot nodeId={id} key={id} />
          ))}
        </Row>
      </div>
    }

    <Bottom>
      <Button onClick={onDeleteClick}>Delete Sketch</Button>
    </Bottom>
  </Wrapper>
)

Sketch.propTypes = {
  title: PropTypes.string.isRequired,
  sketchId: PropTypes.string.isRequired,
  params: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  shots: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired

}

export default Sketch
