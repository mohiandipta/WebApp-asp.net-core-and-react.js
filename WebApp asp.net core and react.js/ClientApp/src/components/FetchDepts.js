import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FetchDepts extends Component {
    constructor(props) {
        super(props);
        this.state = { depts: [], loading: true };
    }
    render() {
        let contents = this.state.loading ? <p><em>Loading...</em></p> : this.renderDeptsTable(this.state.depts);
        return (
            <div>
                <h1 id='tableLabel'>Departments</h1>
                <p>This components fetches departments data from the server</p>
                <p>
                    <Link to="/adddept">Create New Department</Link>
                </p>
                {contents}
            </div>
        );
    }

    componentDidMount() {
        this.populateDeptsData();
    }


    async populateDeptsData() {
        const response = await fetch('api/deptsapi');
        const data = await response.json();

        this.setState({ depts: data, loading: false });
    }

    renderDeptsTable(depts) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th></th>
                        <th>Dept No</th>
                        <th>Department Name</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {depts.map(dept =>
                        <tr key={dept.deptNo}>
                            <td></td>
                            <td>{dept.deptNo}</td>
                            <td>{dept.dName}</td>
                            <td>{dept.location}</td>
                            <td>
                                <button className="btn btn-success" onClick={(id) => { this.handleEdit(dept.deptNo) }}>Edit</button>&nbsp;
                                <button className="btn btn-danger" onClick={(id) => { this.handleDelete(dept.deptNo) }}>Delete</button>&nbsp;
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    handleEdit(id) {
        this.props.history.push("dept/edit" + id);
    }

    handleDelete(id) {
        if (!window.confirm("Are you sure? ypu want to delete?" + id)) {
            return;
        }
        else {
            fetch('api/deptsapi' + id, { method: 'delete' })

                .then(data => {
                    this.setState({
                        data: this.state.depts.filter((rec) => {
                            return rec.deptNo != id;
                        })
                    });
                });
        }
    }
}


export default FetchDepts;

