const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Finds all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll(
      {
        include: {
          model: Product,
          attributes: ['product_name']
        }
      }
    )

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Finds category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: {
        model: Product,
        attributes: ['product_name']
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates a category based on ID
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a category based on ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!'});
      return;
    };

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exports to router
module.exports = router;
