import { useState } from "react";

export default function SearchInput({ sx, ...other }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Call search function with new search term
    search(newSearchTerm);
  };

  const search = (searchTerm) => {
    // Implement your search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        bg: "white",
        borderRadius: "md",
        boxShadow: "sm",
        overflow: "hidden",
        ...sx,
      }}
      {...other}
    >
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        sx={{
          appearance: "none",
          bg: "gray.100",
          border: "none",
          flex: "1",
          fontSize: "md",
          p: 2,
          "&:focus": {
            outline: "none",
            bg: "white",
          },
        }}
      />
    </div>
  );
}



//iconify included
import { useState } from "react";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-mdi/search";

export default function SearchInput({ sx, ...other }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    // Call search function with new search term
    search(newSearchTerm);
  };

  const search = (searchTerm) => {
    // Implement your search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        bg: "white",
        borderRadius: "md",
        boxShadow: "sm",
        overflow: "hidden",
        ...sx,
      }}
      {...other}
    >
      <div sx={{ p: 2 }}>
        <Icon icon={searchIcon} />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        sx={{
          appearance: "none",
          bg: "gray.100",
          border: "none",
          flex: "1",
          fontSize: "md",
          p: 2,
          "&:focus": {
            outline: "none",
            bg: "white",
          },
        }}
      />
    </div>
  );
}
