import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../config/mui-config";

export const LinkBtn = styled(Link)
`color: ${theme.palette.primary.main};
text-decoration: underline;
&:hover{
    color: ${theme.palette.primary[700]};
`
export const CardWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  position: relative;
`;

export const NewCardBadge = styled.p`
  background-color: ${theme.palette.primary.main};
  color: #fff;
  padding: 3px 20px;
  position: absolute;
  top: 0px;
  left: 0;
`;


export const Li = styled.li`
    margin-bottom: 16px;
    width: 185px;
`

export const Ul = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`  