module.exports = {

    getMenus(){

        return [
            {
                text:"Tela inicial",
                href:"/admin",
                icon:"home",
                active:false
            },

            {
                text:"Menu",
                href:"/admin/menus",
                icon:"cutlery",
                active:false
            },

            {
                text:"reservations",
                href:"/admin/reservations",
                icon:"calendar-check-o",
                active:false
            },

            {
                text:"Contacts",
                href:"/admin/contacts",
                icon:"coments",
                active:false
            },

            {
                text:"usuarios",
                href:"/admin/users",
                icon:"users",
                active:false
            },

            {
                text:"E-mails",
                href:"/admin/emails",
                icon:"envelope",
                active:false
            }
        ]
    }
};