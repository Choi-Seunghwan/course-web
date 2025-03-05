import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";

const categories = ["All", "Apparel", "Dress", "Bag"];

const StyledTabs = styled(Tabs)({
  minHeight: "36px",

  "& .Mui-selected": {
    color: "#212806 !important",
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginBottom: "10px",
  },
  "& .MuiTabs-indicator::after": {
    content: '""',
    width: "4px",
    height: "4px",
    backgroundColor: "#C48F67",
    transform: "rotate(45deg)",
    marginBottom: "1px",
  },

  "& .MuiButtonBase-root": {
    fontFamily: "Tenor Sans, sans-serif !important",
  },
});

export default function CategoryTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Box sx={{ maxWidth: "375px", margin: "auto", textAlign: "center" }}>
      <StyledTabs
        value={selectedTab}
        onChange={(event, newValue) => setSelectedTab(newValue)}
        centered
        sx={{
          "--Tabs-spacing": "1px",
        }}
      >
        {categories.map((category, index) => (
          <Tab
            key={index}
            label={category}
            sx={{
              textTransform: "none",
              fontSize: "13px",
              minHeight: "36px",
              fontWeight: selectedTab === index ? "bold" : "normal",
              color: selectedTab === index ? "#000" : "#999",
            }}
          />
        ))}
      </StyledTabs>
    </Box>
  );
}
