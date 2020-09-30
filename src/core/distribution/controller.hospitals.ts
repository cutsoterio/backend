import {Request, Response} from 'express'
import ModelHospital from "../../models/model.hospital";

export default class ControllerHospitals {

    getHospitals = (req: Request, res: Response) => {
        const query = req.query

        ModelHospital.find(query)
            .exec()
            .then(docs => {
                res.json([...docs])
            })
            .catch(err => {
                res.status(500)
                    .json({
                        error: true,
                        message: err
                    })
            })
    }

    getSingleHospital = (req: Request, res: Response) => {

    }

    saveHospital = (req: Request, res: Response) => {
        const hospitals = {
            name: req.body.name,
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            capacity: req.body.capacity,
            isTestingCenter: req.body.isTestingCenter,
            isQuarantineCenter: req.body.isQuarantineCenter,
            phoneNumber: req.body.phoneNumber
        }

        new ModelHospital(hospitals)
            .save()
            .then(doc => {
                res.json({...doc})
            })
            .catch(err => {
                res.json({
                    error: true,
                    message: err
                })
            })
    }

    deleteHospital = (req: Request, res: Response) => {
        const _id = req.query.id

        ModelHospital.findByIdAndDelete(_id)
            .exec()
            .then(doc => {
                res.json({
                    error: false,
                    message: `Successfully deleted ${_id}`
                })
            })
            .catch(err => {
                res.status(500)
                    .json({
                        error: true,
                        message: err
                    })
            })
    }

    patchHospital = (req: Request, res: Response) => {

    }

    nukeHospitals = (req: Request, res: Response) => {

    }

    getClosestHospital = (req: Request, res: Response) => {

    }
}