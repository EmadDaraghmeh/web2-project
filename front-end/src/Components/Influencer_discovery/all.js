import React from "react";
import FilterBy from "../Influencer_discovery/FilterBy";
import ProfileCardList from "../Influencer_discovery/ProfileCardList";
import SearchBar from "../Influencer_discovery/SearchBar";

function All() {
	return (
		<>
			<SearchBar />
			<ProfileCardList />
			<FilterBy />
		</>
	);
}

export default All;
