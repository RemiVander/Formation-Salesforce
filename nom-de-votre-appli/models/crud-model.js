module.exports = {
    createCrud: function () {
        let data = "Form data was inserted";
        return data;
    },
    fetchCrud: function () {
        let data = "data was fetched";
        return data;
    },
    editCrud: function (editData) {
        let data = "Data is edited by id: " + editData;
        return data;
    },
    UpdateCrud: function (updateId) {
        let data = "Data was updated by id: " + updateId;
        return data;
    },
    deleteCrud: function (deleteId) {
        let data = "Data was deleted by id: " + deleteId;
        return data;
    },
};
