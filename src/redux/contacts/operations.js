import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const contacts = await axios.get("/contacts");
        return contacts.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
},
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const isFetching = state.contacts.isFetching;
            return !isFetching
        }
    });

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const createdContact = await axios.post("/contacts", contact);
        return createdContact.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const deletedContact = await axios.delete(`/contacts/${id}`);
        return deletedContact.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const changeContact = createAsyncThunk("contacts/changeContact", async ({ id, name, number }, thunkAPI) => {
    try {
        const changedContact = await axios.patch(`contacts/${id}`, { name, number });
        return changedContact.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})