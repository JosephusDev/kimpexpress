import {db} from "../db.js"

export const getVeiculos = (_, res) => {
    const query = "SELECT * FROM veiculo"

    db.query(query, (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const getVeiculo = (req, res) => {
    const query = "SELECT * FROM veiculo where id = ?"

    db.query(query, [req.params.id], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json(data)
    })
}

export const editVeiculo = (req, res) => {
    const query = "UPDATE veiculo SET lat = ?, lng = ? WHERE id = ?"

    const values = [
        req.body.lat,
        req.body.lng
    ]

    db.query(query, [...values, req.params.id], (err) => {
        if(err) return res.json(err)
        return res.status(200).json("Veiculo editado com sucesso.")
    })
}