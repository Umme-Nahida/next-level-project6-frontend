Link_Link: https://assignment-6-neon-eight.vercel.app
Backend Link_Link: https://assingment-5-seven.vercel.app

<h2>✅Project Overview</h2>
The Ride Management System is a web application designed to manage and monitor rides efficiently. It provides a platform for admins, drivers, and riders to interact seamlessly, ensuring smooth booking, tracking, and ride completion processes.


<h2>✅Project Features</h2>

User authentication (Admin, Driver, Rider roles)

Ride booking and cancellation

Ride status tracking (requested, ongoing, completed, canceled)

Driver approval and suspension management

Fare calculation and payment integration

Advanced search and filtering (by date, status, driver, rider)

Dashboard with analytics and ride history


<h2>✅Athentication</h2>

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| POST   | /api/auth/register | Register a new user     |
| POST   | /api/auth/login    | Login and get JWT token |
| post   | /api/auth/logout   | logout user             |



<h2>✅Admin API Endpoints</h2>
| Method | Endpoint                        | Description            |
| ------ | ------------------------------- | ---------------------- |
| GET    | /api/admin/users                | View all users         |
| GET    | /api/admin/drivers              | View all drivers       |
| PATCH  | /api/admin/users/block/\:id     | Block a user account   |
| PATCH  | /api/admin/users/unblock/\:id   | Unblock a user account |
| PATCH  | /api/admin/drivers/approve/\:id | Approve a driver       |
| PATCH  | /api/admin/drivers/suspend/\:id | Suspend a driver       |



<h2>✅Rider APIs</h2>
| Method | Endpoint               | Description                             |
| ------ | ---------------------- | --------------------------------------- |
| POST   | /api/rides/request     | Request a ride (pickup & destination)   |
| PATCH  | /api/rides/cancel/\:id | Cancel own ride (before driver accepts) |
| GET    | /api/rides/me          | View own ride history                   |



<h2>✅Driver APIs</h2>
| Method | Endpoint                   | Description                                 |
| ------ | -------------------------- | ------------------------------------------- |
| PATCH  | /api/rides/accept/\:id     | Accept a ride request                       |
| PATCH  | /api/rides/reject/\:id     | Reject a ride request (optional)            |
| PATCH  | /api/rides/\:id/pickup     | Mark ride as picked up                      |
| PATCH  | /api/rides/\:id/in-transit | Mark ride as in transit                     |
| PATCH  | /api/rides/\:id/complete   | Mark ride as completed                      |
| GET    | /api/rides/earnings        | View completed rides & total earnings       |
| PATCH  | /api/drivers/availability  | Set driver availability (ACTIVE / INACTIVE) |

<h2>✅Extra Features</h2>
*Password hashing (bcrypt)

*JWT-based login & route protection

*User blocking/unblocking by admin

*Driver approval/suspension by admin

*Complete ride history for riders

*Earnings history for drivers

*Timestamps history for each ride status



<h2>✅Tech Stack</h2>
Frontend Framework: React (with React Router for routing)
State Management: Redux Toolkit, RTK Query, Axios 
Language: TypeScript
Styling: Tailwind CSS with Shadcn UI
Backend API: Node.js/Express, MongoDB, JWT + bcrypt (Secure Authentication)
Enhancements: recharts (data visualization), react-hot-toast (notifications)


<h2>✅Setup Instructions</h2>

Clone the repository from GitHub.

git clone https://github.com/your-username/ride-management.git


Go inside the project folder.

cd ride-management


Install all required dependencies.

npm install


Create a .env file in the root directory and add your environment variables (Database URI, JWT secret, Stripe key, etc.).

Start the backend server.

npm run server


Start the frontend development server.

npm run dev


Open your browser and visit: http://localhost:3000
