import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-abbreviation.json"
      )
      .then((data) => setCountries(data.data));
  }, []);

  const handleChange = (e) => setCountry(e.target.value);

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            label="Select Country"
            onChange={handleChange}
          >
            {countries.map((country) => (
              <MenuItem value={country.abbreviation}>
                {country.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Alert severity="success">Country selected {country} </Alert>
      </Box>
    </div>
  );
};

export default Country;
