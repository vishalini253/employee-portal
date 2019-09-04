import React from 'react'
import { history } from '../../history'
import './style.css'

class DashBoardPage extends React.Component {
    componentDidMount = () => {
        const { state } = this.props.location
        const user= state && state.dashBoardData.user ? state.dashBoardData.user : []
        if (!user.length) {
            history.push({pathname: '/login'})
        }
    }

    renderDashBoardView = () => {
        const { state } = this.props.location
        const user = state && state.dashBoardData.user ? state.dashBoardData.user : []
        const dataTable = user && user.length && user.map(employee => {
            return (
                <tr className="table-entries">
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
            <table className="table-wrapper">
                <tr className="table-heading">
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
        const user = state && state.dashBoardData.user ? state.dashBoardData.user : []
        const dashBoardView = user && user.length ? this.renderDashBoardView() : 'No Employee details found'
        return (
            <div className="dashboard-page-container">
                <h2 className="dashboard-title"> Dash Board Page </h2>
                {dashBoardView}
            </div>
        )
    }
}

export { DashBoardPage }
export default DashBoardPage