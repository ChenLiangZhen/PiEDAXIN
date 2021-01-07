const mysql = require('mysql');

//create connection
const conn = mysql.createPool({
    connectionLimit: 10,
    host: '45.130.228.109',
    user: 'u753616498_Piedaxin',
    password: 'Piedaxin000',
    database: 'u753616498_Piedaxin'
});

// conn.connect((err) =>{
//     if(err) { console.log(err); throw err; }
//     console.log('MySql Connected...');
// });
let AccountDB = {}

AccountDB.all=()=>{
    return new Promise((resolve,reject)=>{
        conn.query(`SELECT * FROM UserAccounts`, (err, result) =>{
            if(err){ console.log("QUERY ERROR" + JSON.stringify(err)); return reject(err);}
            return resolve(result);
        });
    });
};

AccountDB.createAccount=(name,email,password,avturl)=>{

    return new Promise((resolve,reject)=>{
        conn.query(`INSERT INTO UserAccounts(NAME,EMAIL_ADRS,PSWORD,AVTURL) VALUES(?,?,?,?)`,[name, email, password,decodeURIComponent(avturl)], (err) =>{
            if(err){ console.log("QUERY ERROR");
            console.log("QUERYERR" + JSON.stringify(err))
                return reject(err);
            };
            console.log("AccountCreated");
        });
    });
};

AccountDB.authAccount=(email,password)=>{

    return new Promise((resolve,reject)=>{
        conn.query(`SELECT PSWORD, NAME, AVTURL, CART_ITEMS, EMAIL_ADRS  FROM UserAccounts WHERE EMAIL_ADRS = ?`,[email], (err, result) =>{
            if(err){ console.log("QUERY ERROR");
                console.log("QUERYERR" + JSON.stringify(err))
                return reject(err);
            };

            console.log(password);
            console.log(JSON.stringify(result));
            // return resolve(result);
            if(JSON.stringify(result).search(password)!== -1){
                console.log("DB: "+JSON.stringify(result));
                return resolve(result);
            }return resolve(null);
        });
    });
};

AccountDB.alterHeart=(pname, amount)=>{

    return new Promise((resolve,reject)=>{
        conn.query(`UPDATE Products SET PHEART = PHEART + ? WHERE PNAME = ?`,[amount, pname], (err) =>{
            if(err){ console.log("QUERY ERROR");
                console.log("QUERYERR" + JSON.stringify(err))
                return reject(err);
            }
            console.log("Product's heart: " + pname + " Has Been Changed.");
        });
    });
};

AccountDB.fetchHeart=()=>{

    return new Promise((resolve,reject)=>{
        conn.query(`SELECT PHEART FROM Products`, (err, result) =>{
            if(err){ console.log("QUERY ERROR");
                console.log("QUERYERR" + JSON.stringify(err))
                return reject(err);
            }
            console.log(JSON.stringify(result));
            return resolve(JSON.stringify(result));
        });
    });
};

module.exports = AccountDB;