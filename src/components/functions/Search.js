import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="search-box form-inline col-4">
                <input type="text" name="" id="" className="form-control" placeholder="Search for..." aria-describedby="helpId" />
                <button className="btn btn-primary">Go!</button>
            </div>
        );
    }
}
export default Search;