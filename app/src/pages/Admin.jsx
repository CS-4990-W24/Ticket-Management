import DataTable from "@/components/DataTable";
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

function createTicketData(id) {
    const statuses = ['Open', 'Closed', 'In Progress', 'Resolved'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    return {
        id,
        ticketInfo: `Ticket Info ${Math.floor(Math.random() * 1000)}`,
        status: randomStatus
    };
}

const ticketsData = Array.from({length: 13}, (_, i) => createTicketData(i + 1));

function Admin() {
    return (
        <section>
            <h1>Admin Page</h1>
            <DataTable data={usersData} tableName="Users"/>
            <br />
            <DataTable data={ticketsData} tableName="Tickets"/>
        </section>
    );
}

export default Admin;
