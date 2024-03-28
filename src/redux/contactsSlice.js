import { createSelector, createSlice } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";



const initialContactsValue = {
    contacts: {
        items: [],
        loading: false,
        error: null
    },
}

const fetchPending = (state) => {
    state.contacts.error = false;
    state.contacts.loading = true;
}
const fetchRejected = (state) => {
    state.contacts.loading = false;
    state.contacts.error = true;
}




const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContactsValue,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, fetchPending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.loading = false;
                state.contacts.items = action.payload;
            })
            .addCase(fetchContacts.rejected, fetchRejected)
            .addCase(addContact.pending, fetchPending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.loading = false;
                state.contacts.items.push(action.payload);
            })
            .addCase(addContact.rejected, fetchRejected)
            .addCase(deleteContact.pending, fetchPending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.loading = false;
                const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id);
                state.contacts.items.splice(index, 1)

            })
    }
});

export const selectorContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;


export const selectFilteredContacts = createSelector([selectorContacts, selectNameFilter], (contacts, filter) => {
    if (filter !== "") {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    } else {
        return contacts;
    }
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;