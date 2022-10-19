const ProductModel = require('../Models/ProductModel');

class ProductController {

    async store(req, res) {

        const productAlreadyExists = await ProductModel.findOne({ title })
        if (!productAlreadyExists) {
            return res.status(400).json({ "message": "O Produto já existe" })
        }

        const createProduct = await ProductModel.create(req.body);
        return res.status(200).json(createProduct);
    }

    async index(req, res) {
        const products = await ProductModel.find();

        return res.status(200).json(products);
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductModel.findById(id)

            if (!product) {
                return res.status(404).json({ "message": "Produto não existe" })
            }

            return res.status(200).json(product)
        }
        catch {
            return res.status(404).json({ "message": "Verifique o produtoID" })

        }
    }

    async update(req, res) {

        try {

            const { id } = req.params;

            await ProductModel.findByIdAndUpdate(id, req.body);

            return res.status(200).json({ "message": "produto atualizado" });

        } catch {
            return res.status(404).json({ "message": "falha na atualização do produto" });

        }

    }

    async destroy(req, res) {
        try {

            const { id } = req.params;

            const productDeleted = await ProductModel.findByIdAndDelete(id);

            if (!productDeleted) {
                return res.status(404).json({ "message": "Produto não existe" })
            }
            return res.status(200).json({ "message": "produto excluído" });

        } catch {
            return res.status(404).json({ "message": "falha na exclusão do produto" });

        }


    }
}

module.exports = new ProductController();