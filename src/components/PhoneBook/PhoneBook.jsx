import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title } from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <PhoneBookForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default PhoneBook;
