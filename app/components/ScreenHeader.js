import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faUser, faList, faHandPeace } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useAppStore } from '../store/useAppStore'
import { removeItem, storeData } from '../store/AsyncStorage'

export default function ScreenHeader({username, listTitle}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [inputOpen, setInputOpen] = useState(false)
  const [inputText, setInputText] = useState("")

  const changeUsername = useAppStore(state => state.updateUsername)
  const title = username ? `${username}'s Packing list` : listTitle

  const handleSubmit = () => {
    if (inputText === "") {
      Alert.alert("Invalid input", "Username can't be blank")
    } else {
      changeUsername(inputText)
      Alert.alert("Success!", `You're username has been changed to ${inputText}`)
      setInputOpen(false)
      setInputText("")
    }
  }

  const handleAppReset = () => {
    changeUsername(null)
    removeItem("username")
  }
  
  const newUsernameInput = () => {
    return (
      <>
        <View style={styles.inputText}>
          <TextInput 
            placeholder='New username' 
            placeholderTextColor={"gray"}
            value={inputText}
            onChangeText={text => setInputText(text)}
            />
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-evenly", width: "100%"}}>
            <TouchableOpacity 
              style={[styles.button, {width: "45%", justifyContent: "center", height: 40}]}
              onPress={() => setInputOpen(false)}
              >
              <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, {width: "45%", justifyContent: "center", height: 40}]}
              onPress={handleSubmit}
              >
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </>
    )
  }

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <FontAwesomeIcon icon={faBars} size={23}/>
      </TouchableOpacity>

      <Modal
          visible={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          animationType='fade'
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={inputOpen ? styles.inputContainer : styles.settingContainer}>
              {inputOpen ? newUsernameInput() :
              <>
                <TouchableOpacity style={styles.button} onPress={() => setInputOpen(true)}>
                  <View style={styles.buttonIcon}>
                    <FontAwesomeIcon  icon={faUser}/>
                  </View>
                  <View style={styles.buttonText}>
                    <Text >Change username</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <View style={styles.buttonIcon}><FontAwesomeIcon icon={faList}/></View>
                  <View style={styles.buttonText}><Text>Reset all lists</Text></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleAppReset}>
                  <View style={styles.buttonIcon}><FontAwesomeIcon icon={faHandPeace}/></View>
                  <View style={styles.buttonText}><Text>Reset app</Text></View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.button, {width: "50%", justifyContent: "center"}]}
                  onPress={()=> setModalOpen(false)}
                  >
                  <Text>Close</Text>
                </TouchableOpacity>
                </>
              }
            </View>
          </View>
          </Modal>
          </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText:{
    fontSize: 25,
    fontWeight: "bold"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.60)"
  },
  settingContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "grey",
    // gap: 10,
    borderRadius: 25,
    height: 300,
    width: 250
  },
  button: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    height: 50,
    borderRadius: 25
  },
  buttonText: {
    // alignItems: "center",
    width: "60%"
  },
  buttonIcon: {
    alignItems: "center",
    width: "35%"
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-evenly',
    backgroundColor: "grey",
    gap: 5,
    padding: 10,
    width: 250,
    height: 150,
    borderRadius: 25
  },
  inputText:{
    backgroundColor: "#fff",
    // borderWidth: 1,
    width: "100%",
    padding: 15,
    borderRadius: 25,
    borderColor: "rgba(0, 0, 0, 0.80)"
  },
})