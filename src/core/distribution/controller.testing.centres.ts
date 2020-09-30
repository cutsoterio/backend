import {Request, Response} from 'express'
import ModelTestingCentre from "../../models/model.testing.centre";

export default class ControllerTestingCentres {

    getSingleTestingCentre = (req: Request, res: Response) => {
        const query = req.query

        ModelTestingCentre.findOne(query)
            .exec()
            .then(docs => {
                res.json({...docs})
            })
            .catch(err => {
                res.status(500)
                    .json({
                        error: true,
                        message: err
                    })
            })
    }

    getTestingCentres = (req: Request, res: Response) => {
        const query = req.query

        ModelTestingCentre.find(query)
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

    saveTestingCentre = (req: Request, res: Response) => {
        const testingCentres = {
            name: req.body.name,
            address: req.body.address,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            capacity: req.body.capacity,
            maxDailyCapacity: req.body.maxDailyCapacity,
            phone: req.body.phone
        }

        new ModelTestingCentre(testingCentres)
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

    deleteTestingCentres = (req: Request, res: Response) => {

    }

    patchTestingCentres = (req: Request, res: Response) => {

    }

    nukeTestingCentres = (req: Request, res: Response) => {

    }

    getClosestTestingCentre = (req: Request, res: Response) => {

    }
}