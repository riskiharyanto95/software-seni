import React, { Component } from 'react';
import {connect} from 'react-redux';

class List extends Component {
    
    render() {
        if (this.props.loading){
            return (
                <div>
                    <p> Username: {this.props.username} </p>
                    <p> Please wait... </p>
                </div>
            )
        } else {
            if (this.props.resultStatus){
                if (!this.props.firstLoad && this.props.listRepo !== 0){
                    return (
                        <div>
                            <p> Username: {this.props.username} </p>
                            {this.props.listRepo.map((value, index) => {
                                return <p key={value.id}><strong>{value.name}</strong></p>
                            })}
                        </div>
                    )
                } else if (!this.props.firstLoad && this.props.listRepo === 0){
                    return (
                        <div>
                            <p> Username: {this.props.username} </p>
                            <p><strong>Data Not Found</strong></p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p> Username: {this.props.username} </p>
                        </div>
                    ) 
                }
            } else {
                return (
                    <div>
                        <p> Username: {this.props.username} </p>
                        <p> Internal Server Error... </p>
                    </div>
                )
            } 
        }
    }
}

const mapStateToProps = (state) => {
    return {
        firstLoad: state.firstLoad,
        listRepo: state.listRepo,
        username: state.username,
        loading: state.loading,
        resultStatus: state.resultStatus
    }
}

export default connect(mapStateToProps)(List);