import { 
    Button,
} from '@chakra-ui/react';

interface DioButtonProps {
    children: string,
    click: () => void
}

export const DioButton = ({ children, click }: DioButtonProps) => {
    return (
        <Button onClick={click} colorScheme='purple' color='#FFF' size='sm' width='100%' marginTop='10px'>
            { children }
        </Button>
    )
}