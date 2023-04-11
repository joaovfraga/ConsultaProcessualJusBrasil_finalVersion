const { Process, History, RelatedPart} = require('../models');
const getAllProcesses = async (req, res) => {
    try {
        const processes = await Process.findAll({
            include: [
                {
                    model: History,
                    as: "histories"
                },
                {
                    model: RelatedPart,
                    as: "related_parts"
                }
            ]
        });
        return res.status(200).json({ processes });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getProcessById = async (req, res) => {
    try {
        const { id } = req.params;
        const process = await Process.findOne({
            where: { id: id },
            include: [
                {
                    model: History,
                    as: "histories"
                },
                {
                    model: RelatedPart,
                    as: "related_parts"
                }
            ]
        });
        if (process) {
            return res.status(200).json({ process });
        }
        return res.status(404).send('Process with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getProcessByCNJ = async (req, res) => {
    try {
        const { number } = req.params;
        const process = await Process.findOne({
            where: { cnj: number },
            include: [
                {
                    model: History,
                    as: "histories"
                },
                {
                    model: RelatedPart,
                    as: "related_parts"
                }
            ]
        });
        if (process) {
            return res.status(200).json({ process });
        }
        return res.status(404).send('Process with the specified CNJ does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllProcesses,
    getProcessById,
    getProcessByCNJ
}