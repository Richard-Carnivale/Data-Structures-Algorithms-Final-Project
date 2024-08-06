import React, { useState } from 'react';

const Search = ({ players, onQueryChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        onQueryChange(value);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search players..."
                value={inputValue}
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
    );
};

export default Search;