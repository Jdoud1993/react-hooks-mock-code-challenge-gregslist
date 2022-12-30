import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
  }, [])

  function handleDeleteListing (deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListings)
  }

  function handleSearch (search) {
    const searchedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()));
    setListings(searchedListings)
}

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
      <ListingsContainer listings={listings} handleDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
