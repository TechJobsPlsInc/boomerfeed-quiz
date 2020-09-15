
import { setCurrentUser } from '../../actions'
import React, { useReducer ,useState, useEffect} from 'react'
import SideNavbar from '../../components/Sidebar';
import Header from '../../components/Header'

import { connect } from 'react-redux'
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Dashboard.css'
export const Dashboard = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
      fetch('api/groups')
      .then(response => response.json())
      .then(data => this.setState({groups: data, isLoading: false}));

      return () => {
      }
    }, [groups])


    /**
     * @FIXME: Change this so that it actually represents the quiz takers 
     **/ 
 
    const groupList = groups.map(group => {
        const address = `${group.address || ''} ${group.city || ''} ${group.stateOrProvince || ''}`;
        return <tr key={group.id}>
          <td style={{whiteSpace: 'nowrap'}}>{group.name}</td>
          <td>{address}</td>
          <td>{group.events.map(event => {
            return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit'
            }).format(new Date(event.date))}: {event.title}</div>
          })}</td>
          <td>
            <ButtonGroup>
              <Button size="sm" color="primary" tag={Link} to={"/groups/" + group.id}>Edit</Button>
              <Button size="sm" color="danger" onClick={() => this.remove(group.id)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      });

    return (
        <>  
            <Header/>
            <div className="container-fluid" >
                <div className="row">

                    <SideNavbar/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div className="float-right">
                            <Button color="success" tag={Link} to="/groups/new">Refresh</Button>
                        </div>
                        <h3>Hey guys let's troll our relatives</h3>
                            <Table className="mt-4">
                                <thead>
                                <tr>
                                <th width="20%">Name</th>
                                <th width="20%">Alignment</th>
                                <th>Clicked Links</th>
                                <th width="20%">Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                {groupList}
                                </tbody>             
                            </Table>
                    </main>
                </div>
            </div>
        </>
        
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
