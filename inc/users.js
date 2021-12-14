var conn = require("./db");

module.exports = {

    render(req, res, error){

        res.render("admin/login", {
            body: req.body,
            error

        });

    },

    login(email, password){

        return new Promise((resolve, reject)=>{

            conn.query(`
                SEECT * FROM tb_users WHERW email = ?
            ` [
                email

            ], (err, results)=>{

                if(err) {
                    reject(err);
                } else {

                    if(!results.length > 0){
                        reject('algo esta incorreto');

                    } else {

                        let row = results[0];

                        if (row.password !== password) {
                            reject('algo esta incorreto');

                        } else {
                            resolve(row);

                        }

                    }

                    let row = results[0];

                }

            })


        });


    }

};