const Electiondb = require('../Models/Election.model')

async function createElection(req, res) {
    let { title, candidates } = req.body;

    
   if (typeof candidates === "string") {
    candidates = [candidates];
       }


    try {
        const election = await Electiondb.create({
            title,
            candidates
        });

        return res.redirect('/admin?success=Election created');
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" });
    }
}





async function updateElection(req, res) {
    const id = req.params.id;
    const { title, candidates, status } = req.body;

    try {
        const updated = await Electiondb.findByIdAndUpdate(
            id,
            { title, candidates, status },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ msg: "election not found" });
        }

        return res.status(200).json({ msg: "election updated", data: updated });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'something went wrong' });
    }
}




async function deleteElection(req,res){
    const id = req.params.id;

    const deleted =  await Electiondb.findByIdAndDelete(id);
    
    if(!deleted){
        return res.status(500).json({msg: "internal server error"})
    }

    return res.status(200).json({msg: "election deleted"})
}

module.exports = {
    createElection,
    updateElection,
    deleteElection
};