import Home from './Home';
import Profile from './Profile';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    }
];
