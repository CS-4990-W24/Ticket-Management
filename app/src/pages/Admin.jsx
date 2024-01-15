import DataTable from "@/components/DataTable";
import { useEffect, useState } from "react";

function createTicketData(TicketId, Price, Seat, Status) {
    return {
        TicketId,
        Price,
        Seat,
        Status,
    };
}
const statuses = ['Open', 'Closed', 'In Progress', 'Resolved'];
const seats = ['A1', 'B2', 'C3', 'D4', 'E5', 'F6', 'G7', 'H8', 'I9', 'J10'];

const ticketsData = Array.from({length: 15}, (_, i) => createTicketData(
    i + 1,
    Math.floor(Math.random() * 100) + 50, // Price between 50 and 150
    seats[Math.floor(Math.random() * seats.length)], // Random seat from the seats array
    statuses[Math.floor(Math.random() * statuses.length)] // Random status from the statuses array
));

function Admin() {
    const [userData, setUserData] = useState([{}]);
    useEffect(() => {
        const getUsers = async () => {
            const request = await fetch("http://localhost:3000/api/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
            const response = await request.json();
            console.log(response);
            setUserData(response);
        };
        getUsers();
    }, []);

    return (
        <section>
            <h1>Database Management</h1>
            <DataTable data={userData} tableName="Users"/>
            <br />
            <DataTable data={ticketsData} tableName="Tickets"/>
        </section>
    );
}

export default Admin;
