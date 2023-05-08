import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                {/* Burada bir aksiyon çağıracağız */}
                <button onClick={e => {
                    this.props.dispatch(increaseCounter())
                }}>
                    1 Arttır
                </button>
            </div>
        )
    }
}

/* Aksiyon çağırmak için, Reduxta aksiyon bağlamak için mapDispatchToProps kullanılır */

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(increaseCounter, dispatch) } /* i'si küçük IncreaseCounter() değil, yani komponent'i çağırmadık aksiyonu çağırdık */
}

export default connect(mapDispatchToProps)(IncreaseCounter);