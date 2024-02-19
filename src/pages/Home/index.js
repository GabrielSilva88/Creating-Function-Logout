import React, { useContext } from "react";
import { Button, Text, View } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function Home() {
    const { signOut, user } = useContext(AuthContext);
    return (
        <View>
            <Text>Tela home</Text>
            <Text>Nome: {user.name} </Text>
            <Button
                title="Sair da Conta"
                onPress={() => signOut()}
            />
        </View>
    )
}