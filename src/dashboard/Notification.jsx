import React, { useEffect, useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from API or service
    // Example static data
    setNotifications([
      'Harvest season starts next week!',
      'Reminder: Update your availability.',
    ]);
  }, []);

  return (
    <div className='notification'>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
