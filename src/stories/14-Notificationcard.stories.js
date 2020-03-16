import React from 'react';
import NotificationCard from "../comps/NotificationCard";
import "../App.scss";

export default {
    title: "NotificationCard",
    component: NotificationCard
}

export const defaultNotificationCard= () => {
    return <NotificationCard />
};
