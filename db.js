import mysql from "mysql"

export const db = mysql.createConnection({
    host: "boca2dpbrkqhuamotuph-mysql.services.clever-cloud.com",
    user: "unqzutprbqxzmxtd",
    password: "eyQnTcsoHVhIVXN0kZEt",
    database: "boca2dpbrkqhuamotuph"
})