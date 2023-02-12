import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../Redux/contactsSlice';
import { List, Item, Name, BtnDel } from '../PhoneBook.styled';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <List>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <Item key={number}>
            <Name>{name}</Name>
            <Name>{number}</Name>
            <BtnDel type="button" onClick={() => dispatch(removeContact(id))}>
              Delete
            </BtnDel>
          </Item>
        );
      })}
    </List>
  );
}
