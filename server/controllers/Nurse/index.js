import express from "express";

import nurseModel from "../../models/Nurse/Nurse.js";

const nurseRouter = express();

nurseRouter.post("/register", async (req, res) => {
    try {
        let NurseData = req.body;
        await nurseModel.create(NurseData);
        res.status(200).json({ msg: "Nurse Register Successfully" })
    } catch (error) {
        res.status(500).json({ msg: "Internal Server error" })
    }
})

nurseRouter.delete("/delete-all", async (req, res) => {
    try {

        await nurseModel.deleteMany({});
        res.status(200).json({ msg: "All nurse are deleted" })

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
})

nurseRouter.delete("/delete/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await nurseModel.findByIdAndDelete(id)
        if (!id) {
            res.status(404).json({ msg: "Error! nurse ID not found" })
        }
        res.status(200).json({ msg: "nurse Deleted Sucessfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });
    }
});


nurseRouter.put("/update/:nurseID", async (req, res) => {
    try {
        let { nurseID } = req.params;
        let update = req.body;

        let UpdatedData = await nurseModel.findByIdAndUpdate(nurseID, update)

        if (!UpdatedData) {
            return res.status(404).json({ msg: "Nurse ID not found" })
        }

        res.status(200).json({ msg: "Nurse Updated Sucessfully" });

    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }

});


nurseRouter.get("/all", async (req, res) => {
    try {

        let NurseAllData = await nurseModel.find({});
        res.status(200).json({ NurseAllData })

    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})

nurseRouter.get("/:nurseID", async (req, res) => {
    try {
        let { nurseID } = req.params;
        // console.log(nurID);
        let getAdmin = await adminModel.findById(nurseID);

        if (!nurseID) {
            return res.status(404).json({ error: "Nurse Not found" });
        }

        res.status(200).json({ getAdmin })
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})

export default nurseRouter;

