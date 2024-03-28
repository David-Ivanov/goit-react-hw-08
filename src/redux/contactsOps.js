import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fc1eed14650eb2100b942f.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const contacts = await axios.get();
        return contacts.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const createdContact = await axios.post("", contact);
        return createdContact.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const deletedContact = await axios.delete(`/${id}`);
        return deletedContact.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})