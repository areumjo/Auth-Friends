import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';

class Protected extends React.Component {
    state = {
        friends: []
      };
    
      componentDidMount() {
        this.getData();
      }
    
      getData = () => {
        axiosWithAuth()
          .get('http://localhost:5000/api/friends')
          .then(res => {
              console.log('Protected page data: ', res);
              this.setState({
                  friends: res.data
              })
          })
          .catch(err => console.log(err.response));
      };
    
      render() {
        console.log(this.state.friends)
        return (
          <div>
              <p>Say hi! - list of friends</p>
              {this.state.friends.length > 1 ? this.state.friends.map(a => <Friend key={a.id} name={a.name} age={a.age} email={a.email}/>) : <p className="loading">Loading...</p>}
          </div>
        );
      }
    }
        
export default Protected;