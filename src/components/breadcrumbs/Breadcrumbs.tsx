import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import styled from "styled-components";

export default function Breadcrumbs(props: {
  items: { name: string; path: string }[];
}) {
  return (
    <MuiBreadcrumbs separator="" aria-label="breadcrumb">
      {props.items.map((item, index) => {
        return (
          <p className="tenor-sans-regular" key={index}>
            {item.name}
          </p>
        );
      })}
    </MuiBreadcrumbs>
  );
}
