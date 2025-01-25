const  { Item }  = require("../models/index.js");

//    ping just for check
function pingController(req, res, next) {
    return res.json({message: 'item  controller is up'});
}

//    create item in DB     --admin
async function createController(req, res, next) {
    try {
        const { name, description } = req.body;

        // Validate the input
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }

        // Create a new item in DB
        const item = await Item.create({
            name,
            description,
        });
        return res.status(201).json({
            message: "Item created successfully",
            data: item,
        });
    } catch (error) {
        // Handle errors
        console.error("Error creating item:", error);
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
}


    //  get all item from DB   --both admin and user

async function getAllItemsController(req, res, next) {
        try {
            const items = await Item.find({}); 
            return res.status(200).json({
                message: "Items retrieved successfully",
                data: items,
            });
        } catch (error) {
            console.error("Error fetching items:", error);
            return res.status(500).json({
                message: "An error occurred while fetching items",
                error: error.message,
            });
        }
}
    

    //    get item by id   -- both admin and user
async function getItemByIdController(req, res, next) {
    const { id } = req.params; 
    try {
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({
                message: "Item not found",
            });
        }
        return res.status(200).json({
            message: "Item retrieved successfully",
            data: item,
        });
    } catch (error) {
        console.error("Error fetching item by ID:", error);
        return res.status(500).json({
            message: "An error occurred while fetching the item",
            error: error.message,
        });
    }
}


    // update the item   -admin
const updateItemController = async (req, res) => {
    const { id } = req.params;  
    const { name, description } = req.body;  
    try {
        const item = await Item.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }  
        );
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(200).json(item);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};




//   for deleting the item   -admin 
const deleteItemController = async (req, res) => {
    const { id } = req.params;


    try {
        
        const item = await Item.findByIdAndDelete(id);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.status(200).json({ message: 'Item successfully deleted', item });
    } catch (error) {
        console.error('Error deleting item:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};













module.exports = {
pingController , 
createController ,
getAllItemsController , 
getItemByIdController , 
updateItemController , 
deleteItemController
}

