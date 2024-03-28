import ContactForm from './ContactForm/ContactForm'
import SearchBar from './SearchBar/SearchBar'
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/contactsOps';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/contactsSlice';


function App() {

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      {loading && <p>loading...</p>}
      {error && <p>error</p>}
      {!error && <ContactList />}
    </div>

  )
}

export default App
