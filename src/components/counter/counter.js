//Dependencies
import React,{Component} from 'react'
import propTypes from 'prop-types'

//Assets
import Empleado from '../prop/index'
import Mylink from '../events/link'

class Counter extends Component
{
    static propTypes =
    {
        initialCount: propTypes.number
    }

    static defaultProps =
    {
        initialCount: 0
    }

    state =
    {
        count: this.props.initialCount
    }

    tick()
    {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render()
    {
        return(
            <div onClick={ this.tick.bind(this) }>
              Clicks: { this.state.count }
              <Empleado name="Carlos" />
              <Empleado name="Rebeca" />
              <Empleado name="Rocio" />
              <Mylink />
            </div>
        )
    }
}

export default Counter

