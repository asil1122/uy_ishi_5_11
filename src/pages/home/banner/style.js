import styled from "@emotion/styled";
import { theme } from "../../../config/mui-config";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 130%;
  color: #f9f9f9;
  max-width: 380px;
  margin-bottom: 32px;
  
  @media (max-width: ${theme.breakpoints.values.md}px) {
    font-size: 30px;
    max-width: none;
`;
