var express = require('express');
var router = express.Router();
const mysql = require('mysql')
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(password, storedHash) {
  return await bcrypt.compare(password, storedHash);
}

const con = mysql.createConnection({
  host: 'mysql-bahige.alwaysdata.net',
  user: 'bahige',
  password: '12Emmanuel-89',
  database: 'bahige_aed'
})

con.connect(err => {
  if (err) throw err;
  console.log("Connecté à MySQL !");
});

/* GET login page. */
router.get('/', async function(req, res, next) {
  res.render('admin/login');
});

/* POST login. */
router.post('/login', async function(req, res, next) {
  con.query("SELECT * FROM redacteur WHERE adresseMail = ?", [req.body.mail], async function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    if(result.length === 0)
      res.render('admin/error', { message: 'Adresse mail introuvable!' })
    else {
      const verif = await verifyPassword(req.body.motDePasse, result[0].motDePasse)
      if(verif) {
        req.session.userId = result[0].id
        res.redirect('/admin/redaction')
      }
      else {
        res.render('admin/error', { message: 'Mot de passe incorrect!' })
      }
    }
  });
});

/* GET logout. */
router.get('/logout', async function(req, res, next) {
  req.session.destroy(err => {
    if (err) return res.status(500).send('Erreur de déconnexion');
    res.redirect('/admin');
  });
});

/* GET home page. */
router.get('/redaction', async function(req, res, next) {
  if(req.session.userId) {
    res.render('admin/index');
  } else {
    res.redirect('/admin')
  }
});

/* GET articles page. */
router.get('/articles', function(req, res, next) {
  if(req.session.userId) {
    res.render('admin/articles');
  } else {
    res.redirect('/admin')
  }
});

/* GET profil page. */
router.get('/profil', function(req, res, next) {
  if(req.session.userId) {
    res.render('admin/profil');
  } else {
    res.redirect('/admin')
  }
});

/* GET details article page. */
router.get('/articles/:id', function(req, res, next) {
  if(req.session.userId) {
    res.render('admin/detailsArticle', { id: req.params.id});
  } else {
    res.redirect('/admin')
  }
});

module.exports = router;
