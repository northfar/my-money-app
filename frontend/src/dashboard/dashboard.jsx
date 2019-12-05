import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

//import { getSummary } from './dashboardActions'
import api from '../services/api'


class Dashboard extends Component{

    constructor(props){
        super(props)
        this.state = {credit: 0, debt: 0}
    }

    componentWillMount(){
       // this.props.getSummary() - {*Carregar os dados do dashboard c/ Redux *}
       api.get('/billingCycles/summary').then(res => this.setState(res.data) )
    }

    render(){
        //const {credit, debt} = this.props.summary
        const {credit, debt} = this.state
        return(
            <div>
                <ContentHeader title='Dashboard' subtitle ='ver. 1.0' />
                 <Content>
                     <Row>
                         <ValueBox cols='12 4' color='green' value={`R$ ${credit}`} text='Total de Créditos' icon='bank' />
                         <ValueBox cols='12 4' color='red' value={`R$ ${debt}`} text='Total de Débitos' icon='credit-card' />
                         <ValueBox cols='12 4' color='blue' value={`R$ ${credit - debt}`} text='Valor Consolidado' icon='money' />
                     </Row>
                 </Content>
            </div>
        )
    }
}


/*
propagar o estado e a action para o reducer - Redux
const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)*/
export default Dashboard