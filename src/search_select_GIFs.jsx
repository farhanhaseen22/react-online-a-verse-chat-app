import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const SendGif = ({ onGifSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const API_KEY = "YOUR_GIPHY_API_KEY";

  const searchGifs = async (query) => {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: API_KEY,
          q: query,
          limit: 10,
        },
      });
      setGifs(response.data.data);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() !== "") {
      searchGifs(e.target.value);
    } else {
      setGifs([]);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setIsSearching(!isSearching)}>GIF</button>
      {isSearching && (
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            background: "white",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for GIFs..."
            style={{ width: "200px", marginBottom: "10px" }}
          />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {gifs.map((gif) => (
              <img
                key={gif.id}
                src={gif.images.fixed_height_small.url}
                alt={gif.title}
                onClick={() => {
                  onGifSelect(gif.images.fixed_height_small.url);
                  setIsSearching(false);
                }}
                style={{ cursor: "pointer", margin: "5px" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

SendGif.propTypes = {
  onGifSelect: PropTypes.func.isRequired,
};

export default SendGif;
