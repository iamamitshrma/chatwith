import { Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/storeHook';
import { Button } from '@rneui/base';
import { themeChanger } from '../store/themeStore/themeSlice';

type Props = {}

const Test = (props: Props) => {
  const state = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch()

  console.log(state)
  return (
    <Text>

      <Button onPress={() => dispatch(themeChanger())}>Click</Button>

    </Text>
  )
}

export default Test