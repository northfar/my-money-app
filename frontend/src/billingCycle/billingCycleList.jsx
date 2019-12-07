import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import IconButton from '../common/layout/iconButton'

import {getList, showUpdate} from './billingCycleActions'

class BillingCycleList extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                  <IconButton style='warning' type='button' icon='pencil' onClick={() => this.props.showUpdate(bc)}/>
                  <IconButton style='danger' type='button' icon='ban' onClick={() => alert('Action de exclusão')}/>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='action'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)