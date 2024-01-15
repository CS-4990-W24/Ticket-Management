import DataTable from "@/components/DataTable";
import { useEffect, useState } from "react";

function Admin() {
    const [userData, setUserData] = useState([{}]);
    const [ticketsData, setTicketsData] = useState([{}]);
    useEffect(() => {
        const getUsers = async () => {
            const request = await fetch("http://localhost:3000/api/users");
            const response = await request.json();
            setUserData(response);
        };
        getUsers();

        const getTickets = async() => {
            const request = await fetch("http://localhost:3000/api/tickets");
            const response = await request.json();
            setTicketsData(response);
        }
        getTickets();

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
