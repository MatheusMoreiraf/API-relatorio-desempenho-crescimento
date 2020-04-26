import express from "express";
import ProgressModel from "../model/progressModel";
import jwt from "jsonwebtoken";

const reportRouter = express.Router();

reportRouter.route("/:email/progress").get((req, resp) => {
    try {
        let token = req.headers['token'];
        if (token) {
            jwt.verify(token, process.env.SECRET, function (err, decoded) {
                if (err) {
                    status401(resp);
                } else if (decoded) {
                    ProgressModel.find({
                        'account.email': req.params.email
                    }, {
                        height: 1, weight: 1, headCircumference: 1, dataProgress: 1
                    }, (err, progress) => {
                        console.log(progress.length)
                        if (err) {
                            status400(resp, err);
                        } else if (!progress || !progress.length) {
                            status404(resp, req.params.email)
                        } else {
                            status200(resp, progress);
                        }
                    });
                }
            });
        } else {
            status401(resp);
        }
    } catch (error) {
        status500(resp, error);
    }
});

function status200(resp, data) {
    resp.statusMessage = "OK";
    resp.status(200).json(data);
}

function status400(resp, err) {
    console.error(`Erro ao salvar: ${err}`);
    resp.statusMessage = "Bad request";
    resp.status(400).json({
        'codigo': '3',
        'mensagem': 'Dados request enviados incorretos'
    });
}

function status401(resp) {
    resp.statusMessage = "Unauthorized";
    resp.status(401).json({
        'codigo': '2',
        'mensagem': 'Token invalido, inexistente ou expirado'
    });
}

function status404(resp, email) {
    resp.statusMessage = "Not found";
    resp.status(404).json({
        'codigo': '4',
        'mensagem': `Recurso ${email} não encontrado`
    });
}

function status500(resp, error) {
    console.error(error);
    resp.statusMessage = "Internal error";
    resp.status(500).json({
        'codigo': '1',
        'mensagem': 'Erro no servidor'
    });
}

export default reportRouter;