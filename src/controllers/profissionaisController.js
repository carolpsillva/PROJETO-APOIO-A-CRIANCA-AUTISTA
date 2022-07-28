const Profissionais = require("../models/profissionaisSchema");


const getAll = async (req, res) => {

  try {

    const allProfessionais = await Profissionais.find();
    res.status(200).json({message: "Lista de Profissionais", allProfessionais});

  } catch(error) {
      return res.status(500).json({ message: error.message })
 };

};

const getByCity = async (req, res) => {

    try {
        const  cidade  = req.query.cidade;
        const profissionais = await Profissionais.find({ cidade: cidade });

        return res.status(200).json(profissionais)
    

    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
;}
    


const getBySpecialty = async (req, res) => {

   try {
    
  const especialidade = req.query.especialidade;
	const profissionais = await Profissionais.find({ especialidade: especialidade });

    return res.status(200).json(profissionais);

} catch(error) {
       return res.status(500).json({ message: error.message })
};

}

const createProfessional = async(req, res) => {

       try {
       
        const newProfessional = new Profissionais ({
            
            nome: req.body.nome,
            especialidade: req.body.especialidade,
            identificação: req.body.identificação,
            estado: req.body.estado,
            cidade: req.body.cidade,
            endereço: req.body.endereço,
            telefone: req.body.telefone,
            createdAt: new Date()
            
})

        const saveProfissional = await newProfessional.save();
         res.status(201).json({
            message: "Cadastro realizado com sucesso.",
            saveProfissional
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const updateProfessional = async (req, res) => {

    try {

        const findProfissional = await Profissionais.findById(req.params.id);

        if (findProfissional) {
          
            findProfissional.nome = req.body.nome || findProfissional.nome
            findProfissional.especialidade = req.body.especialidade || findProfissional.especialidade
            findProfissional.identificação = req.body.identificação || findProfissional.identificação
            findProfissional.cidade = req.body.cidade || findProfissional.cidade
            findProfissional.municipio = req.body.municipio || findProfissional.municipio
            findProfissional.endereço = req.body.endereço || findProfissional.endereço
            findProfissional.telefone = req.body.telefone || findProfissional.telefone
            
        }

            const saveProfissional = await findProfissional.save();
            res.status(200).json({
                message: "Cadastro atualizado com sucesso",
                saveProfissional
            })

        } catch (error) {
          console.error(error)
        }
      };
      
    const deleteProfessional = async(req, res) => {
        
    try {
        const profissionais = await Profissionais.findById(req.params.id);

        await profissionais.delete()

        return res.status(200).json({
          mensagem: `Cadastro do usuário'${profissionais.nome}' deletado com sucesso!`
        })
    
      } catch (err) {
        return res.status(400).json({
          mensagem: err.message
        })
      }
    }
  


module.exports = {
    getAll,
    getByCity,
    getBySpecialty,
    createProfessional,
    updateProfessional,
    deleteProfessional
}
