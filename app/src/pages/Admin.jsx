import { UserContext } from "@/components/AuthenticationContext";
import DataTable from "@/components/DataTable";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [userData, setUserData] = useState([{}]);
    const [ticketsData, setTicketsData] = useState([{}]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.admin) {
            navigate("/");
        }

        const getUsers = async () => {
            const request = await fetch("http://ec2-3-96-129-17.ca-central-1.compute.amazonaws.com/api/users");
            const response = await request.json();
            setUserData(response);
        };
        getUsers();

        const getTickets = async () => {
            const request = await fetch("http://ec2-3-96-129-17.ca-central-1.compute.amazonaws.com/api/tickets");
            const response = await request.json();
            setTicketsData(response);
        };
        getTickets();
    }, []);

    return (
        <section>
            <h1>Database Management</h1>
            <DataTable
                data={userData}
                tableName="Users"
                deleteEndpoint="http://ec2-3-96-129-17.ca-central-1.compute.amazonaws.com/api/users"
            />
            <br />
            <DataTable
                data={ticketsData}
                tableName="Tickets"
                deleteEndpoint="http://ec2-3-96-129-17.ca-central-1.compute.amazonaws.com/api/tickets"
            />
        </section>
    );
}

export default Admin;
