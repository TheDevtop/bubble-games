import { SearchBar, View } from 'react-native-elements';
import {useState} from "react";
import Icon from "react-native-vector-icons/Ionicons";

// This is your new component
export default function SearchInput() {
    const [search, setSearch] = useState('');

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={setSearch}
                value={search}
                containerStyle={{ flex: 1, backgroundColor: 'transparent', borderTopWidth: 0, borderBottomWidth: 0 }}
                inputContainerStyle={{ backgroundColor: 'white' }}
            />
            <Icon name="ios-search" size={30} color="#000" style={{ marginLeft: 10 }}/>
        </View>
    );
}