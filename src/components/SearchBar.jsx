// import { useState } from "react";

function SearchBar({searchText, onChange}) {
    // const [searchText, setSearchtext] = useState("")

    return (
        <div className="search-row">
            <span className="icon">🥟</span>
            <input 
            type="text" 
            placeholder="ຄົ້ນຫາ.../search...."
            value={searchText}
            onChange={(e) => onChange(e.target.value)}
            />

        </div>
    )

}
export default SearchBar;