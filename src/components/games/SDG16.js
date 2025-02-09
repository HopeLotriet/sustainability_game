import React from 'react';
import SDGGame from './SDGGame';

const SDG16 = () => {
    const categories = ["SRC Initiatives", "Justice Systems/Organizations", "Peace-Building Terms"];

    return <SDGGame sdgId={16} categories={categories} />;
};

export default SDG16;
