import { UserModel, pSchema } from '../model/model';
import mongooose from "mongoose";


export class UserAuth {

    constructor() { }

    static register(req, res) {
        const newUser = new UserModel(req.body)
        newUser.save((err, record) => {
            if (err) {
                res.send({ status: false })
            }
            else {
                res.send({ status: true, data: record })
            }
        })
    }

    static login(req, res) {
        let user_id = req.body.user_id;
        let userPassword = req.body.password;

        UserModel.findOne({ user_id: user_id, password: userPassword }, (err, user) => {
            if (err) {
                throw err;
                return res.status(500).send({ status: false });
            }

            if (!user) {
                return res.status(404).send({ status: false });
            }
            else {
                req.session.user = user;
                return res.status(200).send({ status: true, data: user })
            }

        })
    }

    static storeUserForLoginPerson(req, res) {
        const { username, fullname, address, userLoggedIn } = req.body;
        let patientModel = mongooose.model(userLoggedIn, pSchema);

        let newPatientData = {
            patientName,
            patientAge,
            gender,
            disease,
            date
        }
        const newPatient = new patientModel(newPatientData)

        newPatient.save((err, record) => {
            if (err) {
                res.send({ status: false })
            }
            else {
                res.send({ status: true, data: record })
            }
        })
    }
    static storeallusers(req, res) {
        console.log(req.body)
        let newPatientData = {
            patientName:req.body.patientName,
            patientAge:req.body.patientAge,
            gender:req.body.gender,
            disease:req.body.disease,
            date:req.body.disease
        }
        newPatientData.save((err,data)=>{

            if(err){
                res.send("eror incode")
            }
            else{
                res.send(data)
            }
        })
    }

    static getAllPatient(req, res) {
        UserModel.find({}, (err, users) => {
            if (err) throw err;
            res.send({ status: true, data: users })
        })
    }

    static checkLoggedIn(req, res) {
        if (!req.session.user) {
            return res.status(401).send()
        }
        else {
            return res.status(200).send("welcome")
        }
    }


}
