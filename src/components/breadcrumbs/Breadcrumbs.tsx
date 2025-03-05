import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import styled from "styled-components";

export default function Breadcrumbs(props: {
  items: { name: string; path: string }[];
}) {
  return (
    <MuiBreadcrumbs>
      {props.items.map((item, index) => {
        return <span key={index}>{item.name}</span>;
      })}
    </MuiBreadcrumbs>
  );
}
