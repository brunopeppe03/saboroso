var conn = require(".db");

module.exports = {

    getEmails(){

        return new Promise ((resolve, reject)=>{

            conn.query(`
                SELECT * FROM emails ORDER BY email
            `, (err, results)=>{

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }

            });

        })

    }

}