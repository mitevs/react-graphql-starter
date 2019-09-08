import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import routes from './routes';

export default () => {
    return <Switch>
        {renderRoutes(routes)}
    </Switch>
};
