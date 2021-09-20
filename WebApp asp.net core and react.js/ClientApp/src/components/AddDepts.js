import React, { Component } from 'react';

export class Dept {
    constructor() {
        this.deptNo = 0;
        this.dName = "";
        this.location = "";
    }
}

export class AddDept extends Component {
    constructor(props) {
        super(props);

        this.state = { title: "", dept: new Dept, loading: true }
        this.initialize();

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }
    async initialize() {
        var deptNo = this.props.match.params["deptNo"];
        if (deptNo > 0) {
            const response = await fetch('api/deptsapi/' + deptNo)
            const data = await response.json();

            this.setState({ title: "Edit", dept: data, loading: false })
        }
        else {
            this.state({ title: "Create", dept: new Dept, loading: false })
        }
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p> : this.renderCreateForm();
        return <div>
            <h1>{this.state.title}</h1>
            <h3>Department</h3>
            <hr />
            {contents}
        </div>
    }

    handleSave(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        if (this.state.dept.deptNo) {
            var response1 = fetch('api/deptsapi/', + this.state.dept.deptNo, { method: 'PUT', body: data })
            this.props.history.push("/fetch-depts")
        }
        else {
            var response2 = fetch('api/deptsapi', { method: 'POST', body: data })
            this.props.history.push("/fetch-depts")
        }
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/fetch-depts")
    }

    renderCreateForm() {
        return (
            <form onSubmit={this.handleSave}>
                <div className="form-group row">
                    <input type="hidden" name="deptNo" value={this.state.dept.deptNo} />
                </div>

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="dName">Name</label>
                    <div className="col-md-4">
                        <input type="text" name="dName" defaultValue={this.state.dept.dName} className="form-control" required />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="location">Location</label>
                    <div className="col-md-4">
                        <input type="text" name="location" defaultValue={this.state.dept.location} className="form-control" required />
                    </div>
                </div>

                <div className="form-group">
                    <button className="btn btn-success" type="submit">Save</button>
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                </div>
            </form >
        )
    }
}



