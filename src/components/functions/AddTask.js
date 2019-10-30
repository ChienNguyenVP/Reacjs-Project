import React from 'react';

class AddTask extends React.Component {
    render() {
        return (
            <div className="add-task col">
                <button className="btn btn-primary w-100 mb-2">Add Task</button>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control col-4" name="" id="" aria-describedby="helpId" placeholder="Task name" />
                        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <button className="btn btn-primary">Submit</button>
                        <button className="btn btn-outline-secondary" type="button">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddTask;