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
