import * as React from 'react';
import {Container, TextField, Text, Button} from '@src/components/elements';
import {Profile} from '@src/data/mock-profile';
import styles from './styles';
import axios from 'axios';
type ContactInformationFormProps = {
  profile: Profile;
};

const ContactInformationForm: React.FC<ContactInformationFormProps> = ({
  profile,
}) => {
  let [responseData, setResponseData] = React.useState('')
  
  axios.get(`http://192.168.121.48:3000/user/account`)
  .then(res => {
    setResponseData(res.data)
    // list=user_data
  })

  console.log(responseData)
  return (
    <Container style={styles.container}>
      <TextField defaultValue={responseData.profile_name} textContentType="name" hasMargin />
      <TextField
        defaultValue={responseData.telephone_number}
        textContentType="telephoneNumber"
        hasMargin
      />
      <TextField
        defaultValue={responseData.email_address}
        textContentType="emailAddress"
        hasMargin
      />
      <Text isSecondary style={styles.note}>
        Communications and transaction history will be sent to this email
        address
      </Text>
      <Button>
        <Text isWhite isBold>
          Save
        </Text>
      </Button>
    </Container>
  );
};
export default ContactInformationForm;