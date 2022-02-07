const db = require('../db');

const controller = {
  students: {

    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students

      var qryStr = `SELECT * from students INNER JOIN images ON students.id = images.id`;
      db.query(qryStr, (err, data)=> {
        if(err) {
          console.log(err);
          res.status(404).send(err);
        } else {
          console.log(data);
          res.send(data);
          //res.sendStatus(200).send(data);
        }
      })
    },
    postName: function (req, res) {


      var qryStr = `INSERT INTO students (name) VALUES(?)`;
      console.log('POST Students invokedddddddd', qryStr);
      var qryArg = [req.body.name];
      db.query(qryStr,qryArg, (err, data)=> {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send('Successfully Inserted into DB!');
        }
      })
      // TODO: add your code here to add a student's name

    },
    updateName: function (req, res) {
     // console.log('UPDATE NAME CALLED');
      //console.log('New Id = ', req.params);
      // TODO: add your code here to update a student's name
      //var { newId } = req.params;
      //console.log('New Id = ', req.params.id);
     // console.log("ID = ", req.body.name);
      var qryStr = `UPDATE students SET name = "${req.body.name}" WHERE id = ${req.params.id}`;
    //  var qryArg = [req.body.name];
      db.query(qryStr, (err, data) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send('Successfully updated');
        }
      })
    }
  },
  images: {
    postImg: function (req, res) {
     console.log('Post Img invokeddddd', req.body.imgurl);
      var qryStr = `INSERT INTO images (imgurl) VALUES (?)`;
      var qryArg = [req.body.imgurl];
     console.log("req.body.imgurl------", req.body.imgurl);
      db.query(qryStr, qryArg, (err, data) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send('Successfully Inserted into DB!');
        }
      })
      // TODO: add your code here to add a student image

    }
  }
};

module.exports = controller;