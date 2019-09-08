import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ingredients } from '@shared/graphql/queries/ingredients';

const Home = () => {
    const { loading, error, data } = useQuery(ingredients());

    if (loading) {
        return <span>loading...</span>;
    } else {
        console.log(data);
        return <h1>Hello World!</h1>;
    }
};

export default Home;
