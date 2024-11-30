import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container, Conteudo, BotaoAbrir, Titulo, Status } from './styles';
import { Feather } from '@expo/vector-icons';

import { RootStackParamList } from '@/src/utils/types';

interface Data{
    id: number;
    titulo: string;
    status: string;
}


type Props = NativeStackScreenProps<RootStackParamList>;

export default function Vaga({id, titulo, status}: Data) {
    const navigation = useNavigation<Props['navigation']>();
    
    return (
        <Container onPress={() => navigation.navigate('Detalhes')}>
            <Conteudo>
                <Titulo numberOfLines={1}>{titulo}</Titulo>
                <Status numberOfLines={1}>Status: {status}</Status>
            </Conteudo>
            <BotaoAbrir>
                <Feather name="maximize-2" size={32} color={'#FFFFFF'} />
            </BotaoAbrir>
        </Container>
    );
}