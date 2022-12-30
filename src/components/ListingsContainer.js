import React from "react";
import ListingCard from "./ListingCard"




function ListingsContainer({listings, handleDeleteListing}) {

  const listingsToDisplay = listings.map((listing) => <ListingCard key={listing.id} listing={listing} onDeleteListing={handleDeleteListing}/>)

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
