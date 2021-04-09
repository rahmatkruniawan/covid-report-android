import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native'
import axios from "axios";
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR} from "@/const/const";

{/*<a href='https://www.freepik.com/vectors/background'>Background vector created by Harryarts - www.freepik.com</a>*/}
const bannerImage = require("./../../Assets/Images/banner.jpg");


const HomeContainer = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      const {data} = await axios.get("https://covid19.mathdro.id/api");
      console.log("data", data);
      setData(data);
    }catch (e) {
      console.error("error fetch", e)
    }
  };

  const dotSeparator = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
      <ScrollView style={styles.container}>
        <ImageBackground source={bannerImage} style={styles.banner} />
        <View style={styles.contentWrapper}>
          <Text style={styles.headerTitle}>
            {"Update terkini"}
          </Text>
          <Text style={styles.subtitle}>
            {`Terakhir update ${ data ? data.lastUpdate.split("T")[0] : "-"}`}
          </Text>
          {
            data &&
            <View style={styles.parentGrid}>
              <View style={styles.childGrid}>
                <View style={styles.card}>
                  <Icon name="hospital-o" size={15} color={COLOR.terkonfirmasi} />
                  <Text style={styles.terkonfirmasi}>{ dotSeparator(data.confirmed.value)}</Text>
                  <Text style={styles.subtitle}>Terkonfirmasi</Text>
                </View>
              </View>
              <View style={styles.childGrid}>
                <View style={[styles.card]}>
                  <Icon name="medkit" size={15} color={COLOR.sembuh} />
                  <Text style={styles.sembuh}>{ dotSeparator(data.recovered.value) }</Text>
                  <Text style={styles.subtitle}>Sembuh</Text>
                </View>
              </View>
              <View style={styles.childGrid}>
                <View style={[styles.card]}>
                  <Icon name="heartbeat" size={15} color={COLOR.meninggal} />
                  <Text style={styles.meninggal}>{ dotSeparator(data.recovered.value) }</Text>
                  <Text style={styles.subtitle}>Mati</Text>
                </View>
              </View>
            </View>
          }
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
  banner: {
    width: "auto",
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  parentGrid: {
    justifyContent: 'center',
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
  },
  childGrid: {
    flex: 1,
    padding: 2
  },
  card : {
    width: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#eee",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  spacingLeft: {
    marginLeft: 4,
  },
  dotTerkonfirmasi: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: COLOR.terkonfirmasi,
  },
  dotMeninggal: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: COLOR.meninggal,
  },
  dotSembuh: {
    width: 10,
    height: 10,
    borderRadius: 10/2,
    backgroundColor: COLOR.sembuh,
  },
  terkonfirmasi: {
    color: COLOR.terkonfirmasi,
    marginTop:8,
  },
  meninggal: {
    color: COLOR.meninggal,
    marginTop: 8,
  },
  sembuh: {
    color: COLOR.sembuh,
    marginTop: 8,
  },
  subtitle: {
    color: COLOR.text.subtitle,
    fontSize: 10
  }
});



export default HomeContainer
