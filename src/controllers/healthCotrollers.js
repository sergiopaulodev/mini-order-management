const healthCheck = (req,res) => {
    res.status(200).json({
        status:'ok',
        service:'mini-order-managment'
    });
};

module.exports = {
    healthCheck
};