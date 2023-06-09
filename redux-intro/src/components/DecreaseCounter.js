import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { decreaseCounter } from "../redux/actions/counterActions"

class DecreaseCounter extends Component {
  render() {
    return (
        <div>
        {/* Burada bir aksiyon çağıracağız */}
        <button onClick={e => {
            this.props.dispatch(decreaseCounter())
        }}>
            1 Azalt
        </button>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(decreaseCounter, dispatch) } 
}

export default connect(mapDispatchToProps)(DecreaseCounter);