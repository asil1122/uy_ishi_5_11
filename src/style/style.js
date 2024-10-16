import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { theme } from "../config/mui-config";
import { IconButton } from "@mui/material";

export const LinkBtn = styled(Link)
`color: ${theme.palette.primary.main};
font-size: 18px;
text-decoration: underline;
&:hover{
  color: ${theme.palette.primary[700]};
  }
  @media (max-width: ${theme.breakpoints.values.md}px) {
    font-size: 14px;
  }
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

export const LikeBtn = styled(IconButton)`
  border: 1px solid ${theme.palette.grey[700]};
  border-radius: 10px;
  width: 51px;
  height: 51px;
  padding: 15px;
  &:hover {
    border: none;
    color: #fff;
    background-color: ${theme.palette.secondary.main};
  }
`;