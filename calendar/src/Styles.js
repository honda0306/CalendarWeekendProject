import styled from 'styled-components';
import { marginHelper } from './mixins';

export const Container = styled.div`
  max-width: 880px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
`;

export const PrimaryHeading = styled.h1`
  ${marginHelper} font-weight: 300;
  text-align: center;
  font-size: 5rem;
  line-height: 1.3;
`;
