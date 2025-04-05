const homePage = async (req, res) => {
    try {
        res.status(200).json('chào bé iu');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {homePage};