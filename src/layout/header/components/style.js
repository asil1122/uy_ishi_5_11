import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "../../../config/mui-config";

export const Logo = styled(Link)`
  max-width: 220px;
  display: inline-block;
`;


export const CustomIconButton = styled(IconButton)`
  color: #1d1d1d;
  &:hover {
    color: ${theme.palette.primary.main};
}
`;
