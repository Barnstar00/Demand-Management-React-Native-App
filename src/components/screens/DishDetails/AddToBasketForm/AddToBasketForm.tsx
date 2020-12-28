import * as React from 'react';
import {
  Container,
  Text,
  TextField,
  Button,
  Icon,
} from '@src/components/elements';
import styles from './styles';

type AddToBasketFormProps = {
  updateTotalDishAmount: (amount: number) => void;
};

const AddToBasketForm: React.FC<AddToBasketFormProps> = ({
  updateTotalDishAmount,
}) => {
  const [totalAmount, setTotalAmount] = React.useState(1);

  const onButtonPressed = (amount: number) => {
    return () => {
      if (totalAmount === 1 && amount < 1) {
        return;
      }
      const newTotalAmount = totalAmount + amount;
      setTotalAmount(newTotalAmount);
      updateTotalDishAmount(newTotalAmount);
    };
  };

  return (
    <Container style={styles.formContainer}>
      <Text style={styles.title}>Reminder Instruction</Text>
      <TextField
        containerStyle={styles.textField}
        placeholder="E.g. Remove shoes, no smoking.."
      />
     
    </Container>
  );
};
export default AddToBasketForm;
