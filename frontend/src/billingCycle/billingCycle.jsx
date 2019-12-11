
import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import List from './billingCycleList'
import Form from './billingCycleForm'

import { init, create, update, remove } from './billingCycleActions'

class BillingCycle extends Component{

    componentWillMount(){
        this.props.init()
    }

    render(){
        return(
            <div>
                <ContentHeader title='Ciclo de Pagamentos' subtitle ='Cadastro' />
                 <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'/>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create} icon='plus' style='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update} icon='edit' style='warning'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                      icon='times' style='danger'
                                />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                 </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => 
            bindActionCreators({init, create, update, remove}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)

