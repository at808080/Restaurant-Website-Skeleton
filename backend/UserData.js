import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            firstname: "Admin",
            lastname: "Admin",
            email: "admin@ebistrot.com",
            password: bcrypt.hashSync("987654321", 5),
            isAdmin: true
        },
        {
            firstname: "A",
            lastname: "B",
            email: "aaa@aaa.com",
            password: bcrypt.hashSync("123456789", 5),
            isAdmin: false
        }

    ]
}

export default data;
