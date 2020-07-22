import React, { Component } from 'react';
import axios from 'axios'

import {connect} from 'react-redux';


class Search extends Component {
 render() {
  return (
    <input type="text" name="username" id="username" placeholder="Please type username github" onChange={this.changeUsername.bind(this)} />
   );
 }
 
 changeUsername(event){
    let param = {
        listRepo: [],
        username: event.target.value,
    }
    this.props.listGitHub(param)
    this.props.loading({resultStatus: true, loading: true})
    axios.get('https://api.github.com/users/'+event.target.value+'/repos')
        .then(res =>{
            param.listRepo = res && res.data ? res.data : []
            this.props.listGitHub(param)
            this.props.loading({resultStatus: true, loading: false})
        })
        .catch(err =>{
            this.props.loading({resultStatus: false, loading: false})
        })
 }
 
}

const mapDispatchToProps = (dispatch) => {
    return {
        listGitHub: (param) => dispatch({type: 'LIST_GITHUB', listRepo: param.listRepo, username: param.username}),
        loading: (param) => dispatch({type: 'LOADING', loading: param.loading, resultStatus: param.resultStatus})
    }
}

export default connect(null, mapDispatchToProps)(Search);