import React from 'react';
import { Form, Button, FormControlProps } from 'react-bootstrap';

type SignUpFormProps = {
  onSubmit: (username: string, password: string) => void;
};

export default ({ onSubmit }: SignUpFormProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Form onSubmit={() => onSubmit(username, password)}>
      <Form.Group controlId="formTitle" style={styles.title}>
        Sign up to manage your scripts!
      </Form.Group>

      <Form.Group controlId="formUsername">
        <Form.Control
          type="input"
          placeholder="Username"
          onChange={(e: React.FormEvent<FormControlProps>) => setUsername(e.currentTarget.value || '')}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e: React.FormEvent<FormControlProps>) => setPassword(e.currentTarget.value || '')}
        />
      </Form.Group>

      <Button variant="light" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const styles = {
  title: {
    fontSize: '30px',
    fontWeight: 200,
  },
};
