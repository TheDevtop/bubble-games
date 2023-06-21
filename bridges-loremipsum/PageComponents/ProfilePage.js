import * as React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function ProfilePage({navigation}){
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Ionicons name={"arrow-back"} size={40} color={"#F3C853"} style={styles.arrowBack}/>
                <View style={styles.profilePicContainer}>
                    <View style={styles.profilePic}>
                        <Ionicons name={"person"} size={70} color={"#FFFFFF"} style={styles.iconStyle}/>
                    </View>
                </View>

                <Text style={styles.userName}>User name</Text>
                <View style={styles.bioContainer}>
                    <Text style={styles.bio}>Short Bio</Text>
                    <View style={styles.bioDescriptionContainer}>
                        <Text style={styles.bioDescription}>Hello! My name is ---. I am a happy{"\n"} positive person with focus on astronomy{"\n"}and physics.</Text>
                    </View>
                </View>

                <View style={styles.interestContainer}>
                    <Text style={styles.interestText}>My Interest</Text>

                    <View style={styles.firstRow}>
                        <View style={styles.art}>
                            <Ionicons name={"color-palette"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.artText}>Art</Text>
                        </View>

                        <View style={styles.travel}>
                            <Ionicons name={"airplane"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.travelText}>Travel</Text>
                        </View>
                    </View>

                    <View style={styles.secondRow}>
                        <View style={styles.socialJustice}>
                            <Ionicons name={"color-palette"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.socialJusticeText}>Social Justice</Text>
                        </View>

                        <View style={styles.film}>
                            <Ionicons name={"film"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.filmText}>Film</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.personalityContainer}>
                    <Text style={styles.personalityText}>Personality Type</Text>
                    <Text style={styles.personality}>INFP</Text>
                </View>
            </View>
            
            <View style={styles.moreAboutMeContainer}>
                <Text style={styles.moreAboutMeText}>More About Me</Text>
                <View style={styles.moreAboutMeDescriptionContainer}>
                    <Text style={styles.moreAboutMeDescripton}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam massa, pretium ac nisl vel, mollis pretium erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse hendrerit nunc vitae eros tristique varius. Donec faucibus ipsum et bibendum feugiat. Nullam augue quam, mattis nec laoreet eu, elementum in justo. Pellentesque maximus, risus a ornare semper, urna tellus tempor dui, et dictum lorem lacus ut ipsum. Nullam tempor venenatis auctor. In hac habitasse platea dictumst.

                        Quisque nec nulla eget dolor malesuada fermentum a vel arcu. Sed rhoncus euismod odio, a dictum eros convallis eu. Ut at quam felis. Donec vel mauris sed velit elementum volutpat porta et enim. Nunc gravida erat non arcu dapibus, ut ultricies quam dictum. Nunc ante purus, molestie quis libero id, tincidunt ultrices nisl. Nam eu quam at enim congue convallis a non leo. Ut pretium nisi non venenatis ultrices. Proin nec faucibus sem.</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
    },
    container:{
        flexGrow: 1,
         justifyContent: "center",
        alignItems: "center",
    },
    arrowBack:{
        position: "absolute",
       top: 90,
        left: 20,
        color: "#75726B"
    },
    profilePicContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },
    profilePic:{
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#FED78D",
        justifyContent: "center",
        alignItems: "center",
    },
    iconStyle: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    userName:{
        top:25,
        fontSize: 20,
        color: "#707070",
    },
    bioContainer:{
        top:100,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    bio:{
        fontSize: 23,
        color: "#FDA031",
        fontWeight: "bold",
        left: 40
    },
    bioDescriptionContainer:{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#F0BB61",
        width: 350,
        height: 100,
        top: 20,
        padding: 10,
    },
    bioDescription:{
        fontSize: 17,
        top: 5,
        color: "#6F6F6F",
        textAlign: "center",
    },
    interestContainer:{
        top: 150,
        marginLeft: 60,
        marginTop: 20,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    interestText:{
        fontSize: 23,
        color: "#FDA031",
        fontWeight: "bold",
    },
    firstRow:{
        flexDirection: "row",
    },
    art:{
        flexDirection: "row",
        width: 130,
        height: 50,
        backgroundColor: "#FEE5BB",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        top: 20,
        right: 30
    },
    artText:{
        fontSize: 20,
        right: 10
    },
    travel:{
        flexDirection: "row",
        width: 170,
        height: 50,
        backgroundColor: "#F7C571",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
       top: 20,
       right: 10
    },
    travelText:{
        fontSize: 20, 
        right: 10
    },
    secondRow:{
        flexDirection: "row",
      right: 30
    },
    socialJustice:{
        flexDirection: "row",
        width: 220,
        height: 50,
        backgroundColor: "#FEF1BB",
        borderRadius: 30,
        justifyContent: "space-evenly",
        top: 40,
        alignItems: "center",
    },
    socialJusticeText:{
        fontSize: 20,
       right: 10,
    },
    film:{
        flexDirection: "row",
        width: 110,
        height: 50,
        backgroundColor: "#FFFF88",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
       top: 40,
        left: 10
    },
    filmText:{
        fontSize: 20,
        right: 5
    },
    personalityContainer:{
        alignItems:"flex-start",
        right: 80,
        top: 240,
    },
    personalityText:{
        fontSize: 23,
        color: "#FDA031",
        fontWeight: "bold",
        left: 30
    },
    personality:{
        fontSize: 20,
        color: "#6F6F6F",
       left: 30,
        top: 10
    },
    moreAboutMeContainer:{
        marginTop: 300,
        marginBottom: 50,
    },
    moreAboutMeText:{
        fontSize: 23,
        color: "#FDA031",
        fontWeight: "bold",
        left: 70
    },
    moreAboutMeDescriptionContainer:{
        borderRadius: 30,
        backgroundColor: "#FDE5B8",
        width: 350,
        height: 450,
        top: 20,
        padding: 20,
        left: 30
    },
    moreAboutMeDescripton:{
        fontSize: 17,
        color: "#707587"
    }
    
});
