import React from 'react';
import { FlatList } from 'react-native';

export const Menu = ({ items, renderItem, horizontal, accessiblityLabel, accessibilityHint, accessibilityLanguage }: any) => {

    return(
        <FlatList
            role="menu"
            accessibilityLabel={ accessiblityLabel }
            accessibilityHint={ accessibilityHint }
            accessibilityLanguage={ accessibilityLanguage }
            horizontal={ horizontal }
            data={ items }
            renderItem={ ({item}) => renderItem(item) } />
    );

}