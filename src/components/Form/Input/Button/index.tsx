import React from 'react';
import { TouchableOpacityProps } from 'react-native'
import { 
    Container, 
    Title 
} from './styles';

interface Porps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest}: Porps) { 
    return (
        <Container {...rest}>
            <Title>
                { title } 
            </Title>
        </Container>
    )
}