import React from 'react';

class Sort extends React.Component {
    render() {
        return (
            <div className="sort col-3 form-group">
                <div className="input-group">
                    <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Sort by</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sort;