import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'

import {init} from './billingCycleActions'

import IconButton from '../common/layout/iconButton'
import LabelAndInput from '../common/form/labelAndInput'

import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = (accumulator,value) => accumulator+value
        return{
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render(){
        const {handleSubmit, readOnly, credits, debts} = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                  <Field name="name" component={LabelAndInput} readOnly={readOnly}
                         cols='12 4' label='Nome' type='text' placeholder='Informe o nome' />
                  <Field name="month" component={LabelAndInput} readOnly={readOnly}
                         cols='12 4' label='Mês' type='number' placeholder='Informe o mês'/>
                  <Field name="year" component={LabelAndInput} readOnly={readOnly}
                         cols='12 4' label='Ano' type='number' placeholder='Informe o ano'/>
                  <Summary credit={sumOfCredits} debt={sumOfDebts} />
                  <ItemList cols='12 6' readOnly={readOnly} list={credits}
                  legend='Créditos' field='credits'/>
                   <ItemList cols='12 6' readOnly={readOnly} list={debts}
                  legend='Débitos' field='debts' showStatus={true}/>
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
const selector = formValueSelector('billingCycleForm') //Extrai os valores do formulário
const mapStateToProps = state =>(
        {credits: selector(state,'credits'),
        debts: selector(state, 'debts')
    }) // Cria um estado com o valor específico a partir do selector
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)