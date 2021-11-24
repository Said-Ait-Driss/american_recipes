import React from "react";
import { View ,Text ,StyleSheet ,ScrollView} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

function About() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.hello}>Hi .👋</Text>
                <Text style={styles.hello}>I'm Said Ait Driss</Text>
                <Text style={styles.introduce}>
                    I'am a 22 years old full stack developer based in morocco .I have 2+ years of experience in the world of web development and mobile as well .and I have built products both for me and my clients .currently I am a highly skilled web developer.
                </Text>
                <Text style={styles.introduce}>
                    in my career I have built many projects with many different ideas that helped my clients to grow their business.
                </Text>
                <Text style={styles.introduce}>
                    I am always open to Chat .whether you have a project I can help you with ,or  new hiring opportonity,or just want to say hi and ask me a quistion,please feel free to email me at 
                    <Text style={ { fontWeight:"bold" } }>saidaitdrissofficial@gmail.com</Text>
                </Text>
                <Text style={styles.introduce}>
                    As you can always follow me and know more about me on the social media
                </Text>
                <View style={ styles.socialeMedia }>
                    <FontAwesome name="facebook" size={28} style={styles.icon}/>
                    <FontAwesome name="twitter" size={28} style={styles.icon} />
                    <FontAwesome name="instagram" size={28} style={styles.icon}/>
                    <FontAwesome name="linkedin" size={28} style={styles.icon}/>
                    <FontAwesome name="github" size={28} style={styles.icon}/>
                </View>
            </ScrollView>
        </View>
    );
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:"#3B4053",
        paddingTop:10
    },
    hello:{
        textAlign:"center",
        padding:10,
        fontSize:21,
        color:"#ccc"
    },
    introduce:{
        padding:10,
        color:"#ccc"
    },
    socialeMedia:{
        flex:1,
        padding:20,
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    icon:{
        color:"#05A081",
    }
})

export default About;