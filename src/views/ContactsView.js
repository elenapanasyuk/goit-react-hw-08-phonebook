import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { fetchContacts } from '../redux/phonebook/phonebook-operations';
import s from './View.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    //eslint-disable-next-line
  }, [dispatch]);
  return (
    <>
      <h1 className={s.heading}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.heading}>Contacts</h2>
      <div className={s.findcontacts}>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
