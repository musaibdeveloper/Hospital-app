import express from "express"

import adminModel from "../../models/Admin/Admin.js"

const Adminrouter = express.Router();





Adminrouter.post("/register", async (req, res) => {
    try {
        let adminData = req.body;
        await adminModel.create(adminData);
        res.status(200).json({ msg: "Admin Register Successfully" })
    } catch (error) {
        res.status(500).json({ msg: "Internal Server error" })
    }
})

Adminrouter.delete("/delete-all", async (req, res) => {
    try {

        await adminModel.deleteMany({});
        res.status(200).json({ msg: "All users are deleted" })

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
})

Adminrouter.delete("/delete/:id", async (rew, res) => {
    try {
        let id = req.params.id;
        await adminModel.findByIdAndDelete(id)
        res.status(200).json({ msg: "Admin Deleted Sucessfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });
    }
})




export default Adminrouter;