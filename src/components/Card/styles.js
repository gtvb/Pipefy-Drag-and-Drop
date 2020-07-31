import styled, { css } from 'styled-components'

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-left: 10px solid;
  border-left-color: ${props => props.color};
  cursor: grab;
  padding: 10px 8px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > div {
    align-items: center;
    flex-direction: column;
    height: 50%;
  }
  
  > div h3 {
    padding: 8px 0;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;
    h3, h4 {
      opacity: 0;
    }
  `}
`
