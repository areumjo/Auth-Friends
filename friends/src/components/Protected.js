import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
              console.log(res)
          })
          .catch(err => console.log(err.response));
      };
    
      render() {
        return (
          <div>
              <p>Protected data - list of friends</p>
          </div>
        );
      }
    }
        
export default Protected;