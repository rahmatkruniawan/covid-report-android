import React, { useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import {COLOR} from "@/const/const";

{/*<a href='https://www.freepik.com/vectors/background'>Background vector created by Harryarts - www.freepik.com</a>*/}
const bannerImage = require("./../../Assets/Images/banner.jpg");


const FormReport = ({ navigation }) => {
  useEffect(() => {

  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <Text style={styles.headerTitle}>
          {"Form Lapor"}
        </Text>
        <Text style={styles.subtitle}>
          {`Isi form di bawah ini `}
        </Text>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentWrapper: {
    padding: 8
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 16
  },
  subtitle: {
    color: COLOR.text.subtitle,
    fontSize: 10
  }
});



export default FormReport;
