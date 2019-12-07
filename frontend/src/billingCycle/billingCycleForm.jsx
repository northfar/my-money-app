import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'

import {init} from './billingCycleActions'

import IconButton from '../common/layout/iconButton'
import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component{

    render(){
        const {handleSubmit} = this.props
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                  <Field name="name" component={LabelAndInput} 
                         cols='12 4' label='Nome' type='text' placeholder='Informe o nome' />
                  <Field name="month" component={LabelAndInput} 
                         cols='12 4' label='Mês' type='number' placeholder='Informe o mês'/>
                  <Field name="year" component={LabelAndInput} 
                         cols='12 4' label='Ano' type='number' placeholder='Informe o ano'/> 
                </div>
                <div className="box-footer">
                    <IconButton style='primary' type='submit' icon='plus' />
                    <IconButton style='default' type='button' icon='undo' onClick={this.props.init}/>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)