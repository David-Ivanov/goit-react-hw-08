import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";

export const selectContacts = state => state.contacts.contacts.items;

export const selectLoading = state => state.contacts.contacts.loading;

export const selectError = state => state.contacts.contacts.error;

export const selectNameFilter = state => state.filter.filters.name;


const options = {
    includeScore: true,
    keys: ["number", {
        name: "name",
        weight: 2,
    }],
}

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    const fuse = new Fuse(contacts, options);

    if (filter !== "") {
        const result = fuse.search(filter);
        return result
    } else {
        return contacts;
    }
});