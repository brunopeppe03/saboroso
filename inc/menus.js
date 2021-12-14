let conn = require('./db');

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

  }
};