import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { colors, fontFamily } from "../style";

class Button extends Component {
    render() {
        const Component = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <Component
                onPress={this.props.onPress}
                disabled={this.props.disabled}
            >
                <View style={this.props.large ? styles.buttonStyle : styles.buttonStyleSmall}>
                    <Text style={this.props.large ? styles.buttonTextStyle : styles.buttonTextStyleSmall}>
                        {this.props.title}
                    </Text>
                </View>
            </Component>
        );
    }

    static propTypes = {
        disabled: PropTypes.bool,
        large: PropTypes.bool,
        title: PropTypes.string,
        onPress: PropTypes.func.isRequired
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderWidth: 18,
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: colors.redLight,
        backgroundColor: colors.redDark,
    },
    buttonTextStyle: {
        textAlign: "center",
        color: "#fff",
        fontFamily: fontFamily,
        fontSize: 32
    },
    buttonStyleSmall: {
        borderWidth: 8,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: colors.redLight,
        backgroundColor: colors.redDark,
    },
    buttonTextStyleSmall: {
        textAlign: "center",
        color: "#fff",
        fontFamily: fontFamily,
        fontSize: 18
    }
});

export default Button;
