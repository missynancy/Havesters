import React, { useState, useEffect } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState('');

  useEffect(() => {
    // Fetch notifications from API or service
    // Example static data
    setNotifications([
      'Harvest season starts next week!',
      'Reminder: Update your availability.',
    ]);
  }, []);

  const handleUpdateNotification = () => {
    // Assuming you have a list of user emails stored somewhere
    const userEmails = ['user1@example.com', 'user2@example.com'];

    fetch('/update-notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newNotification,
        userEmails
      }),
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Handle response from the server
      setNotifications([...notifications, newNotification]); // Update local notifications
      setNewNotification(''); // Clear input field
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='notification'>
      <div className="notification-content">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newNotification}
          onChange={(e) => setNewNotification(e.target.value)}
          placeholder="Add new notification"
        />
        <button onClick={handleUpdateNotification}>Update Notifications</button>
      </div>
    </div>
  );
}

export default Notifications;
