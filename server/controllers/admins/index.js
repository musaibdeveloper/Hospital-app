import express from "express"

import adminModel from "../../models/Admin/Admin.js"

const Adminrouter = express.Router();

Adminrouter.post("/register", async (req, res) => {
    try {
        let adminData = req.body;
        await adminModel.create(adminData);
        res.status(200).json({ msg: "Admin Register Successfully" })
    } catch (error) {
        res.status(500).json({error})
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

Adminrouter.delete("/delete/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await adminModel.findByIdAndDelete(id)
        if (!id) {
            res.status(404).json({ msg: "Error! Admin ID not found" })
        }
        res.status(200).json({ msg: "Admin Deleted Sucessfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });
    }
});


Adminrouter.put("/update/:adminID", async (req, res) => {
    try {
        let {AdminIDUpdate} = req.params;
        // console.log(AdminIDUpdate);
        let update = req.body;
        // console.log(update);

        let UpdatedData = await adminModel.findByIdAndUpdate(AdminIDUpdate, update)

        if (!UpdatedData) {
            return res.status(404).json({msg : "Admin ID not found"})
        }

        res.status(200).json({ msg: "Admin Updated Sucessfully" });

    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }

});


Adminrouter.get("/all", async (req, res) => {
    try {

        let adminAllData = await adminModel.find({});
        res.status(200).json({adminAllData})
        
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})

Adminrouter.get("/:AdminID", async (req, res) => {
    try {
        let { AdminID } = req.params;
        // console.log(AdminID);
        let getAdmin = await adminModel.findById(AdminID);

        if (!getAdmin) {
            return res.status(404).json({ error: "Admin Not found" });
        }
     
        res.status(200).json({getAdmin})
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})



export default Adminrouter;