import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// Utility to add JWT
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

// register
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/signup", credentials);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.massage);
        }
    }
);

// login
export const login = createAsyncThunk(
    "auth/login",
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", credentials);
            setAuthHeader(res.data.token);
            return res.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.massage);
        }
    }
);

// logout
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            clearAuthHeader()
        } catch (e) {
            return thunkAPI.rejectWithValue(e.massage);
        }
    }
);

// refresh

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken)
            const res = await axios.get("/users/current");
            return res.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.massage);
        }
    },
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            const isRefreshing = state.auth.isRefreshing;
            return !isRefreshing
        }
    }
)