import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

const years = [
  {
    value: 0,
    year: "1950",
  },
  {
    value: 50,
    year: "2000",
  },
  {
    value: 100,
    year: "2050",
  },
];
export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([0, 2000]);

  console.log(value);

  const handleChange = (e: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ maxWidth: "320px" }}>
      <Slider
        getAriaLabel={() => "year range"}
        valueLabelDisplay="auto"
        value={value}
        onChange={handleChange}
        marks={years}
        step={10}
        min={1950}
        max={2050}
      />
    </Box>
  );
}
