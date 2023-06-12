import * as React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomRadioButton = ({ isChecked, onPress }) => {
    const [checked, setChecked] = React.useState(isChecked);

    React.useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    return (
        <TouchableOpacity style={styles.radioButton} onPress={onPress}>
            {checked ? (
                <View style={styles.radioButtonChecked} />
            ) : (
                <View style={styles.radioButtonUnchecked} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    radioButton: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
    },
    radioButtonChecked: {
        height: 35,
        width: 35,
        borderRadius: 30,
        backgroundColor: '#F8CC55', // checked color
    },
    radioButtonUnchecked: {
        height: 33,
        width: 33,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#000', // unchecked border color
    },
});

export default CustomRadioButton;
