import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import PlanillaContacto from './modules/views/contactanos/Planilla';

function contactanos(){
    return(
        <div>
        <AppAppBar></AppAppBar>
        <PlanillaContacto />
        </div>


    );
}

export default withRoot(contactanos);