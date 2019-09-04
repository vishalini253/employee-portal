import React from 'react'

class DashBoardPage extends React.Component {
    renderDashBoardView = () => {
        const { state } = this.props.location
        const { user } = state.dashBoardData
        const dataTable = user && user.length && user.map(employee => {
            return (
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phoneNo}</td>
                </tr>
            )
        })
        const dashBoardView = (
            <table border = "1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone number</th>
                </tr>
                {dataTable}
            </table>
        )
        return dashBoardView
    }

    render() {
        const { state } = this.props.location
        const { user } = state.dashBoardData
        const dashBoardView = user && user.length ? this.renderDashBoardView() : ''
        return (
            <div className="col-md-6 col-md-offset-3">
                {dashBoardView}
            </div>
        );
    }
}

export { DashBoardPage }
export default DashBoardPage