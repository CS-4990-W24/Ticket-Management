import DataTable from "@/components/DataTable";
import { useEffect, useState } from "react";
function createUserData(id, Email) {
    return {
        id,
        Email,
    };
}

const usersData = [
    createUserData(1, "cupcake@example.com"),
    createUserData(2, "donut@example.com"),
    createUserData(3, "eclair@example.com"),
    createUserData(4, "frozenyoghurt@example.com"),
    createUserData(5, "gingerbread@example.com"),
    createUserData(6, "honeycomb@example.com"),
    createUserData(7, "icecreamsandwich@example.com"),
    createUserData(8, "jellybean@example.com"),
    createUserData(9, "kitkat@example.com"),
    createUserData(10, "lollipop@example.com"),
    createUserData(11, "marshmallow@example.com"),
    createUserData(12, "nougat@example.com"),
    createUserData(13, "oreo@example.com"),
];

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
    const [userData, setUserData] = useState([]);
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
            <DataTable data={usersData} tableName="Users"/>
            <br />
            <DataTable data={ticketsData} tableName="Tickets"/>
        </section>
    );
}

export default Admin;
