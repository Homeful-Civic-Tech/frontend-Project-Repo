import React from "react";
import'../CSS/search.css'

function Search(){
return (
    <form class="searchForm">
    <b><label for="search">Search:</label></b>
    <input class = "search" type="text" placeholder="Search"/>
    </form>
)
}
export default Search