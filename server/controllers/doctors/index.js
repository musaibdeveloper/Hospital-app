import express from "express"

import doctorModel from "../../models/Admin/Doctor/Doctor.js";

const doctorRouter = express();

doctorRouter.post("/register", async (req, res) => {
    try {
        let getData = req.body;
        await doctorModel.create(getData);
        res.status(200).json({ msg: "Doctor added Successfully"})
    } catch (error) {
        res.status(500).json({msg : "Internal Server Error"})
    }
})

doctorRouter.delete("/delete-all", async (req, res) => {
    try {

        await doctorModel.deleteMany({});
        res.status(200).json({ msg: "All Doctors are deleted" })

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
})

doctorRouter.delete("/delete/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await doctorModel.findByIdAndDelete(id)
        if (!id) {
            res.status(404).json({ msg: "Error! Doctor ID not found" })
        }
        res.status(200).json({ msg: "Doctor Deleted Sucessfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });
    }
});


doctorRouter.put("/update/:DoctorID", async (req, res) => {
    try {
        let { DoctorIDUpdate } = req.params;
        let update = req.body;

        let UpdatedData = await doctorModel.findByIdAndUpdate(DoctorIDUpdate, update)

        if (!UpdatedData) {
            return res.status(404).json({ msg: "Doctor ID not found" })
        }

        res.status(200).json({ msg: "Doctor Updated Sucessfully" });

    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }

});


doctorRouter.get("/all", async (req, res) => {
    try {

        let DocAllData = await doctorModel.find({});
        res.status(200).json({ DocAllData })

    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})

doctorRouter.get("/:DocID", async (req, res) => {
    try {
        let { DocID } = req.params;
        let DoctorID = await doctorModel.findById(DocID);

        if (!DoctorID) {
            return res.status(404).json({ error: "Doctor Not found" });
        }

        res.status(200).json({  DoctorID})
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})



export default doctorRouter;