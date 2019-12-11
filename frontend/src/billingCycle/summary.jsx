import React, {Component} from 'react'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (

    <Grid cols='12'> 
        <fieldset>
            <legend>Resumo</legend>
            <ValueBox cols='12 4' color='green' text='Total de Créditos'
            value={`R$ ${credit}`} icon='bank'/>
              <ValueBox cols='12 4' color='red' text='Total de Débitos'
            value={`R$ ${debt}`} icon='credit-card'/>
              <ValueBox cols='12 4' color='blue' text='Valor Consolidado'
            value={`R$ ${credit - debt}`} icon='money'/>
        </fieldset>
    </Grid>

)


