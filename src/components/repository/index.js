import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../../services/api';

export default function Repository({ repo }) {

    const [repository, setRepository] = useState(repo);
    const [likes, setLikes] = useState(repo.likes);

    async function handleLikeRepository(id) {
        const response = await api.post(`/projects/${id}/like`);
        if (response.status === 200){
            setLikes(likes+1);
        }
      }

    return (
        <View style={styles.repositoryContainer}>
            <Text style={styles.repository}>{repository.title}</Text>

            <View style={styles.techsContainer}>
                {repository.techs.map(tech => (
                    <Text style={styles.tech} key={tech}>
                        {tech}
                    </Text>
                ))}
            </View>

            <View style={styles.likesContainer}>
                <Text
                    style={styles.likeText}
                    // Remember to replace "1" below with repository ID: {`repository-likes-${repository.id}`}
                    testID={`repository-likes-${repository.id}`}
                >
                    {likes + ' curtidas'}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(repository.id)}
                // Remember to replace "1" below with repository ID: {`like-button-${repository.id}`}
                testID={`like-button-${repository.id}`}
            >
                <Text style={styles.buttonText}>Curtir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    repositoryContainer: {
        marginBottom: 15,
        marginHorizontal: 15,
        backgroundColor: "#fff",
        padding: 20,
    },
    repository: {
        fontSize: 32,
        fontWeight: "bold",
    },
    techsContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    tech: {
        fontSize: 12,
        fontWeight: "bold",
        marginRight: 10,
        backgroundColor: "#04d361",
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: "#fff",
    },
    likesContainer: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    likeText: {
        fontSize: 14,
        fontWeight: "bold",
        marginRight: 10,
    },
    button: {
        marginTop: 10,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "bold",
        marginRight: 10,
        color: "#fff",
        backgroundColor: "#7159c1",
        padding: 15,
    },
})