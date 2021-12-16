let conn = require('./db');
let path = require("path")

module.exports = {
    getMenus(){

       return new Promise((resolve,reject) => {

        conn.query(`
        SELECT * FROM tb_menus ORDER BY id
        
      `
      , (err, results)=>{
    
        if (err) {
          reject(err);
        }

        resolve(results);
    
        });
        
     });

  },

  save(fields, files){

    return new Promise((resolve, reject)=>{

      fields.photo = `image/${path.parse(files.photo.path).base}`;

      conn.query(`
        ISERT INTO tb_menus (title, discription, price, photo)
        VALUES(?, ?, ?, ?)
      `, [
        fields.title,
        fields.discription,
        fields.price,
        fields.photo
      ],(err, results)=>{

        if (err) {
          reject(err);
        } else {

          resolve(results);

        }

      });

    });

  }

};