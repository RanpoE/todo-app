import React from 'react'
import { useTodoContext } from '../../context/TodoContext'

const SearchBar: React.FC = () => {
    const { searchTerm, setSearchTerm } = useTodoContext()

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search todos..."
                className="search-input"
            />
            {searchTerm && (
                <button
                    onClick={() => setSearchTerm('')}
                    className="clear-search"
                >
                    ✕
                </button>
            )}
        </div>
    )
}

export default SearchBar
