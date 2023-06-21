import React, {useState} from "react";
import {View, Text, StyleSheet, Animated, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export default function SelectYourInterestsPage({navigation}) {

    // Initialize state for opacity of each interest
    const [artOpacity, setArtOpacity] = useState(new Animated.Value(1));
    const [travelOpacity, setTravelOpacity] = useState(new Animated.Value(1));
    const [socialJusticeOpacity, setSocialJusticeOpacity] = useState(new Animated.Value(1));
    const [filmOpacity, setFilmOpacity] = useState(new Animated.Value(1));
    const [educationOpacity, setEducationOpacity] = useState(new Animated.Value(1));
    const [sportOpacity, setSportOpacity] = useState(new Animated.Value(1));
    const [musicOpacity, setMusicOpacity] = useState(new Animated.Value(1));
    const [religionOpacity, setReligionOpacity] = useState(new Animated.Value(1));
    const [gamesOpacity, setGamesOpacity] = useState(new Animated.Value(1));
    const [scienceOpacity, setScienceOpacity] = useState(new Animated.Value(1));
    const [economyOpacity, setEconomyOpacity] = useState(new Animated.Value(1));
    const [environmentOpacity, setEnvironmentOpacity] = useState(new Animated.Value(1));
    const [healthOpacity, setHealthOpacity] = useState(new Animated.Value(1));

    // Function to handle fading animation
    const handleFade = (animatedOpacity) => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.interest}>SELECT YOUR INTERESTS</Text>
            <Text style={styles.description}>Select your top 3 interests so users could get to know you better</Text>

            <View style={styles.interestContainer}>
                <View style={styles.firstRow}>
                    <TouchableOpacity onPress={() => handleFade(artOpacity)}>
                        <Animated.View style={{...styles.art, opacity: artOpacity}}>
                            <Ionicons name={"color-palette-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.artText}>Art</Text>
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleFade(travelOpacity)}>
                        <Animated.View style={{...styles.travel, opacity: travelOpacity}}>
                            <Ionicons name={"airplane-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.travelText}>Travel</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondRow}>
                    <TouchableOpacity onPress={() => handleFade(socialJusticeOpacity)}>
                        <Animated.View style={{...styles.socialJustice, opacity: socialJusticeOpacity}}>
                            <Ionicons name={"people-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.socialJusticeText}>Social Justice</Text>
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleFade(filmOpacity)}>
                        <Animated.View style={{...styles.film, opacity: filmOpacity}}>
                            <Ionicons name={"film-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.filmText}>Film</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <View style={styles.thirdRow}>
                    <TouchableOpacity onPress={() => handleFade(educationOpacity)}>
                        <Animated.View style={{...styles.education, opacity: educationOpacity}}>
                            <Ionicons name={"school-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.educationText}>Education</Text>
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleFade(sportOpacity)}>
                        <Animated.View style={{...styles.sport, opacity: sportOpacity}}>
                            <Ionicons name={"football-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.sportText}>Sport</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <View style={styles.forthRow}>
                    <TouchableOpacity onPress={() => handleFade(musicOpacity)}>
                        <Animated.View style={{...styles.music, opacity: musicOpacity}}>
                            <Ionicons name={"musical-notes-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.musicText}>Music</Text>
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleFade(religionOpacity)}>
                        <Animated.View style={{...styles.religion, opacity: religionOpacity}}>
                            <Ionicons name={"book-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.religionText}>Religion</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <View style={styles.fifthRow}>
                    <TouchableOpacity onPress={() => handleFade(gamesOpacity)}>
                        <Animated.View style={{...styles.games, opacity: gamesOpacity}}>
                            <Ionicons name={"game-controller-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.gamesText}>Games</Text>
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleFade(scienceOpacity)}>
                        <Animated.View style={{...styles.science, opacity: scienceOpacity}}>
                            <Ionicons name={"flask-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.scienceText}>Science</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <View style={styles.sixthRow}>
                    <TouchableOpacity onPress={() => handleFade(economyOpacity)}>
                        <Animated.View style={{...styles.economy, opacity: economyOpacity}}>
                            <Ionicons name={"cash-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.economyText}>Economy</Text>
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleFade(environmentOpacity)}>
                        <Animated.View style={{...styles.environment, opacity: environmentOpacity}}>
                            <Ionicons name={"leaf-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.environmentText}>Environment</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <View style={styles.seventhRow}>
                    <TouchableOpacity onPress={() => handleFade(healthOpacity)}>
                        <Animated.View style={{...styles.health, opacity: healthOpacity}}>
                            <Ionicons name={"medkit-outline"} size={40} style={styles.iconStyle}/>
                            <Text style={styles.healthText}>Health</Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Notification")}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>CONTINUE</Text>
                    <Ionicons name={"arrow-forward-outline"} size={30} style={styles.iconStyleLeft}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    interest:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#FFA42A",
        bottom: 100,
        marginTop: 150
    },
    description:{
        fontSize: 18,
        color: "#707070",
        paddingHorizontal: 25,
        textAlign: "center",
        bottom: 80
    },
    interestContainer:{
        bottom: 70,
        marginLeft: 60,
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
    thirdRow:{
        flexDirection: "row",
    },
    education:{
        flexDirection: "row",
        width: 180,
        height: 50,
        backgroundColor: "#F7D755",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 60,
        marginRight: 30,
        marginLeft: -30
        
    },
    educationText:{
        fontSize: 20,
        right: 5
    },
    sport:{
        flexDirection: "row",
        width: 130,
        height: 50,
        backgroundColor: "#FFE394",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        top: 60,
        right: 10
    },
    sportText:{
        fontSize: 20,
        right: 5
    },
    forthRow:{
        flexDirection: "row",
    },
    music:{
        flexDirection: "row",
        width: 150,
        height: 50,
        backgroundColor: "#FEF1BB",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginLeft: -30,
    },
    musicText:{
        fontSize: 20,
        right: 5
    },
    religion:{
        flexDirection: "row",
        width: 150,
        height: 50,
        backgroundColor: "#FBAB5D",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 10
    },
    religionText:{
        fontSize: 20,
        right: 5
    },
    fifthRow:{
        flexDirection: "row",
    },
    games:{
        flexDirection: "row",
        width: 150,
        height: 50,
        backgroundColor: "#FFCA38",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginLeft: -30,
    },
    gamesText:{
        fontSize: 20,
        right: 5
    },
    science:{
        flexDirection: "row",
        width: 150,
        height: 50,
        backgroundColor: "#F6BD84",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 10
    },
    scienceText:{
        fontSize: 20,
        right: 5
    },
    sixthRow:{
        flexDirection: "column",
    },
    economy:{
        flexDirection: "row",
        width: 150,
        height: 50,
        backgroundColor: "#EAC49D",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginLeft: -30,
    },
    economyText:{
        fontSize: 20,
        right: 5
    },
    environment:{
        flexDirection: "row",
        width: 180,
        height: 50,
        backgroundColor: "#F0EAA3",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginLeft: -30
    },
    environmentText:{
        fontSize: 20,
        right: 5
    },
    health:{
        flexDirection: "row",
        width: 150,
        height: 50,
        backgroundColor: "#FFE97C",
        borderRadius: 30,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        marginLeft: -30
    },
    healthText:{
        fontSize: 20,
        right: 5
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 300,
        height: 50,
        backgroundColor: "#F8CC55",
        borderRadius: 30,
        bottom: 20,
    },
    buttonText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFFFFF",
        left: 40
    },
    iconStyleLeft:{
        color: "#FFFFFF",
        fontSize: 30,
        left: 30
    }

})
