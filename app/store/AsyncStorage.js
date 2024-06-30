import AsyncStorage from "@react-native-async-storage/async-storage";


export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log("Saving issue")
    }
}

export const storeObj = async (key, value) => {
    try {
        const jsonData = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonData)
    } catch (e) {
        console.log(e)
    }
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        console.log(value)
        return value
    } catch (e) {
        console.log(e)
    }
}


export const fetchData = async (key, setValue) => {
    try {
        const data = await getData(key)
        setValue(data)
    } catch (e) {
        console.log(e)
    }
}

