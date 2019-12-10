import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'

import {init} from './billingCycleActions'

import IconButton from '../common/layout/iconButton'
import LabelAndInput from '../common/form/labelAndInput'

import CreditList from './creditList'

class BillingCycleForm extends Component{

    render(){
        const {handleSubmit, readOnly} = this.props
        console.log(this.props)
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                  <Field name="name" component={LabelAndInput} readOnly={readOnly}
                         cols='12 4' label='Nome' type='text' placeholder='Informe o nome' />
                  <Field name="month" component={LabelAndInput} readOnly={readOnly}
                         cols='12 4' label='Mês' type='number' placeholder='Informe o mês'/>
                  <Field name="year" component={LabelAndInput} readOnly={readOnly}
                         cols='12 4' label='Ano' type='number' placeholder='Informe o ano'/>
                  <CreditList cols='12 6'/>
                </div>
                <div className="box-footer">
                    <IconButton style={this.props.style} type='submit' icon={this.props.icon} />
                    <IconButton style='default' type='button' icon='undo' onClick={this.props.init}/>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)