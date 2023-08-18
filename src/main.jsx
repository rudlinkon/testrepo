import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root, {loader as rootLoader, action as rootAction} from "./routes/Root.jsx";
import Contact, {loader as contactLoader} from "./routes/Contact.jsx";
import ErrorPage from "./ErrorPage.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import EditContact from "./routes/EditContact";

const router = createBrowserRouter([
    {
        path: "/testrepo/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);