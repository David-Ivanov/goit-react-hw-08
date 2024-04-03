import { createSlice } from "@reduxjs/toolkit"
import { addContact, changeContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";



const initialContactsValue = {
    contacts: {
        items: [],
        loading: false,
        error: null,
    },
    isFetching: false,
}

const fetchPending = (state) => {
    state.isFetching = true;
    state.contacts.error = false;
    state.contacts.loading = true;
}
const fetchRejected = (state) => {
    state.isFetching = false;
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
                state.isFetching = false;
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
            .addCase(logout.pending, fetchPending)
            .addCase(logout.rejected, fetchRejected)
            .addCase(logout.fulfilled, state => {
                state.contacts.items = [];
                state.contacts.loading = false;
                state.contacts.error = false;
            })
            .addCase(changeContact.pending, fetchPending)
            .addCase(changeContact.rejected, fetchRejected)
            .addCase(changeContact.fulfilled, (state, action) => {
                state.contacts.loading = false;
                const index = state.contacts.items.findIndex(contact => contact.id === action.payload.id);
                state.contacts.items[index] = action.payload;
            })
    },
});

const contactsReducer = contactsSlice.reducer;

export const { toggleModal } = contactsSlice.actions;
export default contactsReducer;