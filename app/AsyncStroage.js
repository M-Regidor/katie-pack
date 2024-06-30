import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log("Saving issue")
    }
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value
        
    } catch (e) {
        console.log(e)
    }
}

export const fetchData = async (key, setValue) => {
    try {
        const data = await getData(key)
        setValue(data)
        console.log(data)

    } catch (e) {
        console.log(e)
    }
}