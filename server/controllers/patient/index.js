import express from "express";
import patientModel from "../../models/patient/patient.js";

const PatientRouter = express();


PatientRouter.post("/register", async (req, res) => {
    try {
        let patinet = req.body;
        await patientModel.create(patinet);
        res.status(200).json({ msg: "Patinet Register Successfully" })
    } catch (error) {
        res.status(500).json({ msg: "Internal Server error" })
    }
})

PatientRouter.delete("/delete-all", async (req, res) => {
    try {

        await patientModel.deleteMany({});
        res.status(200).json({ msg: "All patinet are deleted" })

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" })
    }
})

PatientRouter.delete("/delete/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await patientModel.findByIdAndDelete(id)
        if (!id) {
            res.status(404).json({ msg: "Error!  ID not found" })
        }
        res.status(200).json({ msg: " Deleted Sucessfully" });
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });
    }
});


PatientRouter.put("/update/:nurseID", async (req, res) => {
    try {
        let { nurseID } = req.params;
        let update = req.body;

        let UpdatedData = await patientModel.findByIdAndUpdate(nurseID, update)

        if (!UpdatedData) {
            return res.status(404).json({ msg: "Nurse ID not found" })
        }

        res.status(200).json({ msg: "Nurse Updated Sucessfully" });

    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }

});


PatientRouter.get("/all", async (req, res) => {
    try {

        let NurseAllData = await patientModel.find({});
        res.status(200).json({ NurseAllData })

    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})

PatientRouter.get("/:patinetID", async (req, res) => {
    try {
        let { patinetID } = req.params;
        // console.log(nurID);
        let getAdmin = await patientModel.findById(patinetID);

        if (!patinetID) {
            return res.status(404).json({ error: " Not found" });
        }

        res.status(200).json({ patinetID })
    } catch (error) {
        res.status(500).json({ msg: "Internel Server Error" });

    }
})






export default PatientRouter; 