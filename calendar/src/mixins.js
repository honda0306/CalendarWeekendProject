import { css } from 'styled-components';

export const marginHelper = css`
  margin-right: ${props => (props.mx ? props.mx * 1 + 'rem' : 0)};
  margin-left: ${props => (props.mx ? props.mx * 1 + 'rem' : 0)};
  margin-top: ${props => (props.my ? props.my * 1 + 'rem' : 0)};
  margin-bottom: ${props => (props.my ? props.my * 1 + 'rem' : 0)};
`;
