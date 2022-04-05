import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (

        <View style={styles.container}>
            <Input
                placeholder='Entrez votre email'
                label='email'
                leftIcon={{
                    type: 'material',
                    name: 'email'
                }}
                value={email}
                onChange={text => setEmail(text)}
            />
            <Input
                placeholder='Entrez votre mot de passe'
                label='password'
                leftIcon={{
                    type: 'material',
                    name: 'lock'
                }}
                value={password}
                onChange={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="Sign-in" type="clear" />
            <Button title="Sign up" type="clear" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})