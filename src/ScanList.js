import React from 'react';
import './ScanList.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


class ScanList extends React.Component {
    
    // sending dropdown selection to state
    constructor(props) { 
        super(props);
        this.state = { dropdownSelected: '' }
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({dropdownSelected: event.target.value});
        if (this.state.dropdownSelected === 'name') {
            console.log('yes') // state value is always one update behind
        }
    }


    render() {

        // Filtering with sort tests
        const sortedName = this.props.scans.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        const sortedUsername = this.props.users.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        const sortedMinElevation = this.props.scans.sort((a,b) => (a.elevationMin > b.elevationMin) ? 1 : ((b.elevationMin > a.elevationMin) ? -1 : 0));
        const sortedMaxElevation = this.props.scans.sort((a,b) => (a.elevationMax > b.elevationMax) ? 1 : ((b.elevationMax > a.elevationMax) ? -1 : 0));
        

        return (
            <div>
                <div className="Header">
                    Scans:
                </div>
                {/* dropdown menu here */}
                <div>
                Sort by:
                <select name="sort" value ={this.state.dropdownSelected} onChange={this.handleChange}>
                    <option></option>
                    <option value="name">Name</option>
                    <option value="username">Username</option>
                    <option value="minelevation">MinElevation</option>
                    <option value="maxelevation">MaxElevation</option>
              </select>
                </div>
                
                {/* scans list gets rendered here */}
                <div className="ScanList">
                    {this.props.scans.map((scan, i) => {
                        const user = this.props.users.find(u => u.id === scan.scannedByUserId);
                        return (
                            <div className="ScanListItem" key={i}>
                                {scan.name}
                                <div className="UserName">
                                    by {user.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ScanList;
