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
        if (value !== null) {
            return value
        }

    } catch (e) {
        console.log(e)
    }
}


export const fetchData = async (key, setValue) => {
    try {
        const data = await getData(key)
        if (data !== null) {
            setValue(data)
        }
        
    } catch (e) {
        console.log(e)
    }
}

export const fetchObj = async (key, setValue) => {
    try {
        const data = await getData(key)
        if (data != null) {
            const jsonData = JSON.parse(data)
            setValue(key, jsonData)
        }
    } catch (e) {
        console.log(e)
    }
}