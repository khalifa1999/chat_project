import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                user.updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: Image ? Image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Ffr%2Fvectors%2Favatar-ic%25C3%25B4ne-espace-r%25C3%25A9serv%25C3%25A9-1577909%2F&psig=AOvVaw0B2bbYPvFVSW7ugD8KjXq5&ust=1649070680421000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjSw5Lh9_YCFQAAAAAdAAAAABAD"
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    return (

        <View style={styles.container}>
            <Input
                placeholder='Entrez votre nom'
                label='Name'
                leftIcon={{
                    type: 'material',
                    name: 'badge'
                }}
                value={name}
                onChange={text => setName(text)}
            />
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
            <Input
                placeholder='Uploadez une photo de profil'
                label='Profile picture'
                leftIcon={{
                    type: 'material',
                    name: 'face'
                }}
                value={image}
                onChange={text => setImage(text)}
            />

            <Button title="Register" onPress={register} type="clear" />
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})