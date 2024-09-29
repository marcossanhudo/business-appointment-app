import React from 'react';
import { FlatList } from 'react-native';

export const VerticalMenu = ({ items, renderItem, accessiblityLabel, accessibilityHint, accessibilityLanguage }: any) => {

    return(
        <FlatList
            role="menu"
            accessibilityLabel={ accessiblityLabel }
            accessibilityHint={ accessibilityHint }
            accessibilityLanguage={ accessibilityLanguage }
            data={ items }
            renderItem={ ({item}) => renderItem(item) } />
    );

}