import { 
    Button,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface DioButtonProps {
    children: string,
    click: MouseEventHandler
}

export const DioButton = ({ children, click }: DioButtonProps) => {
    return (
        <Button onClick={click} colorScheme='purple' color='#FFF' size='sm' width='100%' marginTop='10px'>
            { children }
        </Button>
    )
}